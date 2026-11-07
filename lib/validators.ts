/**
 * تحقق مشترك بين النموذج والخادم حتى لا تختلف الرسائل.
 */

export interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  message: string;
  product?: string;
  companyWebsite?: string;
}

export interface ValidContact {
  name: string;
  phone: string;
  email: string;
  message: string;
  product?: string;
}

export type ContactErrors = Partial<Record<"name" | "phone" | "email" | "message", string>>;

export type ContactValidation =
  | { ok: true; data: ValidContact; spam?: false }
  | { ok: true; spam: true }
  | { ok: false; errors: ContactErrors };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** يعيد الرقم بصيغة +9647xxxxxxxxx أو null إذا لم يكن هاتفاً عراقياً. */
export function normalizeIraqiPhone(input: string): string | null {
  let value = input.replace(/[^\d+]/g, "");
  if (value.startsWith("+")) value = value.slice(1);
  if (value.startsWith("00964")) value = value.slice(5);
  else if (value.startsWith("964")) value = value.slice(3);
  else if (value.startsWith("0")) value = value.slice(1);

  if (!/^7\d{9}$/.test(value)) return null;
  return `+964${value}`;
}

function cleanText(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, max);
}

export function validateContact(input: unknown): ContactValidation {
  const source = (typeof input === "object" && input !== null ? input : {}) as Partial<ContactPayload>;

  if (typeof source.companyWebsite === "string" && source.companyWebsite.trim() !== "") {
    return { ok: true, spam: true };
  }

  const name = cleanText(source.name, 80);
  const email = cleanText(source.email, 120).toLowerCase();
  const message = typeof source.message === "string" ? source.message.trim().slice(0, 1000) : "";
  const product = cleanText(source.product, 120);
  const phone = normalizeIraqiPhone(typeof source.phone === "string" ? source.phone : "");
  const errors: ContactErrors = {};

  if (name.length < 2 || !/\p{L}/u.test(name)) {
    errors.name = "اكتب الاسم الكامل.";
  }

  if (!phone) {
    errors.phone = "أدخل رقم هاتف عراقي صحيح، مثل 07xxxxxxxxx.";
  }

  if (!EMAIL_PATTERN.test(email)) {
    errors.email = "أدخل بريداً إلكترونياً صالحاً.";
  }

  if (message.length < 10) {
    errors.message = "اكتب رسالتك بوضوح (10 أحرف على الأقل).";
  }

  if (Object.keys(errors).length > 0 || !phone) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      name,
      phone,
      email,
      message,
      ...(product ? { product } : {}),
    },
  };
}

export function validateQuickContact(nameInput: string, phoneInput: string) {
  const name = cleanText(nameInput, 80);
  const phone = normalizeIraqiPhone(phoneInput);
  const errors: Pick<ContactErrors, "name" | "phone"> = {};

  if (name.length < 2 || !/\p{L}/u.test(name)) {
    errors.name = "اكتب الاسم.";
  }
  if (!phone) {
    errors.phone = "أدخل رقم هاتف عراقي صحيح.";
  }

  if (Object.keys(errors).length > 0 || !phone) {
    return { ok: false as const, errors };
  }

  return { ok: true as const, name, phone };
}
