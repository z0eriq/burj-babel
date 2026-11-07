import { NextResponse } from "next/server";
import { validateContact } from "@/lib/validators";

/**
 * يتحقق من نموذج التواصل.
 * التسليم إلى الفريق يتم عبر واتساب من الواجهة، لأن صندوق البريد غير مربوط في هذه النسخة.
 */
const hits = new Map<string, { count: number; reset: number }>();

function allowed(ip: string) {
  const now = Date.now();
  if (hits.size > 500) hits.clear();
  const current = hits.get(ip);
  if (!current || current.reset < now) {
    hits.set(ip, { count: 1, reset: now + 60_000 });
    return true;
  }
  if (current.count >= 8) return false;
  current.count += 1;
  return true;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (!allowed(ip)) {
    return NextResponse.json(
      { ok: false, message: "وصلت إلى حد المحاولات. انتظر دقيقة ثم أعد الإرسال." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "تعذر قراءة البيانات المرسلة." }, { status: 400 });
  }

  const result = validateContact(body);
  if (!result.ok) {
    return NextResponse.json({ ok: false, errors: result.errors }, { status: 422 });
  }

  if (result.spam) {
    return NextResponse.json({ ok: true, spam: true });
  }

  return NextResponse.json({
    ok: true,
    message: "تم التحقق من الطلب. أرسله عبر واتساب ليصل إلى فريق المبيعات.",
  });
}
