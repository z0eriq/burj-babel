"use client";

import { FormEvent, useState, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { validateContact, type ContactErrors, type ValidContact } from "@/lib/validators";
import { buildWhatsAppLink } from "@/lib/whatsapp";

function whatsAppText(data: ValidContact) {
  return [
    "طلب تواصل — برج بابل",
    `الاسم: ${data.name}`,
    `الهاتف: ${data.phone}`,
    `البريد: ${data.email}`,
    data.product ? `المنتج: ${data.product}` : "",
    "",
    data.message,
  ]
    .filter(Boolean)
    .join("\n");
}

/**
 * نموذج التواصل. التحقق يتم محلياً ثم على الخادم،
 * والتسليم الفعلي يتم عبر واتساب لأن صندوق البريد غير مربوط بعد.
 */
export function ContactForm({
  initialMessage = "",
  productLabel,
}: {
  initialMessage?: string;
  productLabel?: string;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(initialMessage);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<ContactErrors>({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState<ValidContact | null>(null);
  const [offline, setOffline] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");

    const local = validateContact({
      name,
      phone,
      email,
      message,
      product: productLabel,
      companyWebsite: honeypot,
    });

    if (!local.ok) {
      setErrors(local.errors);
      return;
    }

    if (local.spam) {
      setSubmitted({ name: "", phone: "", email: "", message: "" });
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          message,
          product: productLabel,
          companyWebsite: honeypot,
        }),
      });
      const body = (await response.json()) as {
        ok?: boolean;
        spam?: boolean;
        message?: string;
        errors?: ContactErrors;
      };

      if (!response.ok) {
        setErrors(body.errors ?? {});
        setFormError(body.message || "تعذر قبول النموذج. راجع الحقول وحاول مرة أخرى.");
        return;
      }

      setOffline(false);
      setSubmitted(local.data);
      if (body.spam) setSubmitted({ name: "", phone: "", email: "", message: "" });
    } catch {
      setOffline(true);
      setSubmitted(local.data);
    } finally {
      setLoading(false);
    }
  }

  if (submitted && !submitted.name && !submitted.message) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6" role="status">
        <h2 className="text-xl font-extrabold text-emerald-950">تم استلام النموذج</h2>
        <p className="mt-2 text-sm leading-7 text-emerald-900">شكراً لتواصلك. سنراجع الطلب في أقرب وقت.</p>
      </div>
    );
  }

  if (submitted) {
    const link = buildWhatsAppLink(whatsAppText(submitted));
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6" role="status">
        <CheckCircle2 className="h-8 w-8 text-emerald-700" aria-hidden="true" />
        <h2 className="mt-3 text-xl font-extrabold text-emerald-950">طلبك جاهز للإرسال</h2>
        <p className="mt-2 text-sm leading-7 text-emerald-900">
          {offline
            ? "تعذر تأكيد الإرسال عبر الموقع. أرسل الرسالة مباشرة عبر واتساب ليصل الطلب إلى المبيعات."
            : "تم التحقق من بياناتك. أرسل الرسالة عبر واتساب ليصل الطلب مباشرة إلى فريق المبيعات."}
        </p>
        <Button asChild variant="gold" className="mt-5">
          <a href={link} target="_blank" rel="noopener noreferrer">
            إرسال عبر واتساب
          </a>
        </Button>
        <button
          type="button"
          className="mt-4 block text-sm font-bold text-brand-navy underline-offset-4 hover:underline"
          onClick={() => {
            setSubmitted(null);
            setMessage("");
          }}
        >
          إرسال رسالة أخرى
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      {productLabel ? (
        <p className="rounded-xl bg-amber-50 px-4 py-3 text-sm font-bold text-amber-950">
          الطلب بخصوص: {productLabel}
        </p>
      ) : null}

      <Field id="name" label="الاسم" error={errors.name}>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          required
        />
      </Field>

      <Field id="phone" label="الهاتف" error={errors.phone}>
        <Input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          dir="ltr"
          className="text-start"
          placeholder="07xxxxxxxxx"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          required
        />
      </Field>

      <Field id="email" label="البريد الإلكتروني" error={errors.email}>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          dir="ltr"
          className="text-start"
          placeholder="name@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          required
        />
      </Field>

      <Field id="message" label="الرسالة" error={errors.message}>
        <Textarea
          id="message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
        />
      </Field>

      <div className="absolute -z-10 h-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="companyWebsite">موقع الشركة</label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      {formError ? (
        <p className="text-sm font-bold text-red-700" role="alert">
          {formError}
        </p>
      ) : null}

      <Button type="submit" variant="gold" className="w-full sm:w-auto" disabled={loading}>
        {loading ? "جارٍ التحقق..." : "إرسال الطلب"}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold text-slate-800">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-semibold text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
