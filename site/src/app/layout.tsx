import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import { ScrollProvider } from "@/components/ScrollProvider";
import { CursorGlow } from "@/components/fx/CursorGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kainosmedical.com"),
  title: {
    default: "Kainos Medical · Alethia — AI for the ultrasounds the world already owns",
    template: "%s · Kainos Medical",
  },
  description:
    "Alethia Kit turns legacy ultrasound machines into real-time AI diagnostic assistants. Built for the emergency and primary-care doctors of Latin America and Africa.",
  applicationName: "Kainos Medical",
  keywords: [
    "medical AI",
    "ultrasound AI",
    "point-of-care ultrasound",
    "POCUS",
    "Alethia",
    "Kainos Medical",
    "emergency medicine",
    "global health",
    "AI diagnostics",
  ],
  openGraph: {
    type: "website",
    title: "Kainos Medical · Alethia",
    description:
      "Every legacy ultrasound, reborn with AI. Real-time diagnostic assistance for emergency and primary care.",
    siteName: "Kainos Medical",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kainos Medical · Alethia",
    description:
      "Every legacy ultrasound, reborn with AI. Real-time diagnostic assistance for emergency and primary care.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-[100dvh] antialiased">
        <LocaleProvider>
          <ScrollProvider>
            <CursorGlow />
            {children}
          </ScrollProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
