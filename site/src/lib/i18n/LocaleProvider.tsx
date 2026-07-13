"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import {
  DEFAULT_LOCALE,
  LOCALES,
  dict,
  type Dict,
  type Locale,
} from "./dictionaries";

type LocaleContextValue = {
  locale: Locale;
  t: Dict;
  setLocale: (locale: Locale) => void;
  toggle: () => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "kainos-locale";

/**
 * Locale lives in a tiny external store synced with localStorage.
 * useSyncExternalStore hydrates with the server snapshot (default locale)
 * and re-renders with the detected one after mount — no hydration mismatch,
 * no setState-in-effect.
 */
let currentLocale: Locale | null = null;
const listeners = new Set<() => void>();

function detectInitialLocale(): Locale {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && LOCALES.includes(stored as Locale)) return stored as Locale;
  const browser = window.navigator.language.slice(0, 2).toLowerCase();
  if (browser === "es") return "es";
  return DEFAULT_LOCALE;
}

function getSnapshot(): Locale {
  if (currentLocale === null) currentLocale = detectInitialLocale();
  return currentLocale;
}

function getServerSnapshot(): Locale {
  return DEFAULT_LOCALE;
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function setStoredLocale(next: Locale) {
  currentLocale = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Storage unavailable (private mode) — keep the in-memory locale.
  }
  listeners.forEach((listener) => listener());
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setStoredLocale(next);
  }, []);

  const toggle = useCallback(() => {
    setStoredLocale(getSnapshot() === "en" ? "es" : "en");
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      t: dict[locale] as Dict,
      setLocale,
      toggle,
    }),
    [locale, setLocale, toggle]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used inside <LocaleProvider>");
  }
  return ctx;
}
