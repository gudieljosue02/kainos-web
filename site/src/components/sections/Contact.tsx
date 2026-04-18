"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowUpRight, Check } from "@phosphor-icons/react/dist/ssr";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/fx/Magnetic";
import { ScanReveal } from "@/components/fx/ScanReveal";

const schema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const { t } = useLocale();
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { role: "investor" },
  });

  const onSubmit = async (_values: FormValues) => {
    setStatus("submitting");
    // Placeholder: integrate with a real endpoint (Formspree, Resend, your API)
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    reset();
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden py-5 md:py-28 lg:py-40"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-3 md:gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left: header + copy */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="eyebrow mb-3 md:mb-6">
                <span className="eyebrow-dot" />
                {t.contact.eyebrow}
              </div>
            </Reveal>
            <Reveal as="h2" className="h-section text-[1.6rem] sm:text-[2.25rem] md:text-5xl lg:text-6xl">
              {t.contact.titleLead}
              <ScanReveal text={t.contact.titleTail} />
            </Reveal>
            <Reveal delay={120}>
              <p className="text-body mt-2 max-w-md text-[13.5px] md:mt-7 md:text-lg">
                {t.contact.body}
              </p>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="shell">
                <div className="shell-inner p-3 md:p-6 lg:p-10">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-3 md:gap-5"
                    noValidate
                  >
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <Field
                        label={t.contact.fields.name}
                        error={errors.name && t.contact.errorRequired}
                      >
                        <input
                          type="text"
                          autoComplete="name"
                          className="form-input"
                          {...register("name")}
                        />
                      </Field>

                      <Field
                        label={t.contact.fields.role}
                        error={errors.role && t.contact.errorRequired}
                      >
                        <select className="form-input" {...register("role")}>
                          <option value="investor">{t.contact.roles.investor}</option>
                          <option value="clinician">{t.contact.roles.clinician}</option>
                          <option value="partner">{t.contact.roles.partner}</option>
                          <option value="other">{t.contact.roles.other}</option>
                        </select>
                      </Field>
                    </div>

                    <Field
                      label={t.contact.fields.email}
                      error={
                        errors.email
                          ? errors.email.type === "invalid_string" ||
                            errors.email.message?.includes("email")
                            ? t.contact.errorEmail
                            : t.contact.errorRequired
                          : undefined
                      }
                    >
                      <input
                        type="email"
                        autoComplete="email"
                        className="form-input"
                        {...register("email")}
                      />
                    </Field>

                    <Field
                      label={t.contact.fields.message}
                      error={errors.message && t.contact.errorRequired}
                    >
                      <textarea
                        rows={5}
                        className="form-input resize-none"
                        {...register("message")}
                      />
                    </Field>

                    <div className="flex flex-col items-start justify-between gap-5 pt-2 sm:flex-row sm:items-center">
                      <Magnetic>
                        <button
                          type="submit"
                          disabled={status === "submitting"}
                          className="btn-primary group disabled:opacity-60"
                          style={{ background: "#0284c7", color: "#ffffff" }}
                        >
                          <span>
                            {status === "submitting"
                              ? t.contact.submitting
                              : status === "success"
                              ? t.contact.success
                              : t.contact.submit}
                          </span>
                          <span className="icon-disc">
                            {status === "success" ? (
                              <Check size={14} weight="bold" />
                            ) : (
                              <ArrowUpRight size={14} weight="bold" />
                            )}
                          </span>
                        </button>
                      </Magnetic>

                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-mute">
                        We reply within 72 hours
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .form-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--hairline);
          border-radius: 10px;
          padding: 12px 14px;
          color: var(--fg);
          font-size: 14.5px;
          font-family: var(--font-sans);
          transition:
            border-color 300ms cubic-bezier(0.32, 0.72, 0, 1),
            background 300ms cubic-bezier(0.32, 0.72, 0, 1);
        }
        .form-input::placeholder {
          color: var(--fg-ghost);
        }
        .form-input:hover {
          border-color: var(--hairline-strong);
        }
        .form-input:focus {
          outline: none;
          border-color: rgba(79, 195, 247, 0.5);
          background: rgba(79, 195, 247, 0.04);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-mute">
        {label}
      </span>
      {children}
      {error && (
        <span className="text-[11px] text-[#ef5b5b]">{error}</span>
      )}
    </label>
  );
}
