"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowUpRight, Check } from "@phosphor-icons/react/dist/ssr";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";

const schema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  email: z.email(),
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

  const onSubmit = async () => {
    setStatus("submitting");
    // Placeholder: integrate with a real endpoint (Formspree, Resend, your API)
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    reset();
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="pt-28 md:pt-40">
      <div className="mx-auto w-full max-w-[88rem] px-5 md:px-10">
        <SectionHead
          index="09"
          label={t.contact.eyebrow}
          title={
            <>
              {t.contact.titleLead}
              <span className="text-ink-mute">{t.contact.titleTail}</span>
            </>
          }
          body={t.contact.body}
        />

        <div className="mt-14 grid grid-cols-1 gap-12 md:mt-20 lg:grid-cols-12">
          {/* Left rail */}
          <Reveal className="lg:col-span-4">
            <div className="flex h-full flex-col justify-between gap-10">
              <dl className="space-y-5">
                <div className="border-t border-hairline pt-4">
                  <dt className="t-label">{t.contact.fields.role}</dt>
                  <dd className="mt-1.5 text-[14px] text-ink-dim">
                    {t.contact.roles.investor} · {t.contact.roles.clinician} ·{" "}
                    {t.contact.roles.partner}
                  </dd>
                </div>
                <div className="border-t border-hairline pt-4">
                  <dt className="t-label">SLA</dt>
                  <dd className="mt-1.5 text-[14px] text-ink-dim">{t.contact.replyNote}</dd>
                </div>
              </dl>
              <span className="t-index hidden text-[8rem] lg:block" aria-hidden>
                09
              </span>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="border border-hairline-strong bg-card p-6 md:p-10"
              noValidate
            >
              <div className="grid grid-cols-1 gap-x-10 gap-y-7 md:grid-cols-2">
                <Field label={t.contact.fields.name} error={errors.name && t.contact.errorRequired}>
                  <input
                    type="text"
                    autoComplete="name"
                    className="form-field"
                    aria-invalid={!!errors.name}
                    {...register("name")}
                  />
                </Field>

                <Field label={t.contact.fields.role} error={errors.role && t.contact.errorRequired}>
                  <select className="form-field" {...register("role")}>
                    <option value="investor">{t.contact.roles.investor}</option>
                    <option value="clinician">{t.contact.roles.clinician}</option>
                    <option value="partner">{t.contact.roles.partner}</option>
                    <option value="other">{t.contact.roles.other}</option>
                  </select>
                </Field>

                <div className="md:col-span-2">
                  <Field
                    label={t.contact.fields.email}
                    error={errors.email && t.contact.errorEmail}
                  >
                    <input
                      type="email"
                      autoComplete="email"
                      className="form-field"
                      aria-invalid={!!errors.email}
                      {...register("email")}
                    />
                  </Field>
                </div>

                <div className="md:col-span-2">
                  <Field
                    label={t.contact.fields.message}
                    error={errors.message && t.contact.errorRequired}
                  >
                    <textarea
                      rows={5}
                      className="form-field resize-none"
                      aria-invalid={!!errors.message}
                      {...register("message")}
                    />
                  </Field>
                </div>
              </div>

              <div className="mt-9 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-ink disabled:opacity-60"
                >
                  <span>
                    {status === "submitting"
                      ? t.contact.submitting
                      : status === "success"
                        ? t.contact.success
                        : t.contact.submit}
                  </span>
                  {status === "success" ? (
                    <Check size={14} weight="bold" className="btn-arrow" />
                  ) : (
                    <ArrowUpRight size={14} weight="bold" className="btn-arrow" />
                  )}
                </button>

                <p className="t-label">{t.contact.replyNote}</p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
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
      <span className="t-label">{label}</span>
      {children}
      {error && <span className="text-[11.5px] text-alert">{error}</span>}
    </label>
  );
}
