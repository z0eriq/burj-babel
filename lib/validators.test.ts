import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { normalizeIraqiPhone, validateContact } from "./validators";

describe("normalizeIraqiPhone", () => {
  it("يقبل الصيغ الشائعة للهاتف العراقي", () => {
    assert.equal(normalizeIraqiPhone("0780 123 4567"), "+9647801234567");
    assert.equal(normalizeIraqiPhone("+9647801234567"), "+9647801234567");
    assert.equal(normalizeIraqiPhone("009647801234567"), "+9647801234567");
  });

  it("يرفض الأرقام القصيرة", () => {
    assert.equal(normalizeIraqiPhone("12345"), null);
  });
});

describe("validateContact", () => {
  it("يقبل رسالة تاجر مكتملة", () => {
    const result = validateContact({
      name: "علي حسين",
      phone: "07801234567",
      email: "ali@example.com",
      message: "أرغب بعرض سعر لزيت دوار الشمس",
    });
    assert.equal(result.ok, true);
    if (result.ok && !result.spam) {
      assert.equal(result.data.phone, "+9647801234567");
    }
  });

  it("يعيد أخطاء الحقول الناقصة", () => {
    const result = validateContact({
      name: "1",
      phone: "123",
      email: "not-an-email",
      message: "قصير",
    });
    assert.equal(result.ok, false);
    if (!result.ok) {
      assert.ok(result.errors.name);
      assert.ok(result.errors.phone);
      assert.ok(result.errors.email);
      assert.ok(result.errors.message);
    }
  });

  it("يتجاهل رسائل المصيدة المخفية", () => {
    const result = validateContact({
      name: "علي حسين",
      phone: "07801234567",
      email: "ali@example.com",
      message: "رسالة نظامية طويلة",
      companyWebsite: "https://spam.example",
    });
    assert.equal(result.ok, true);
    if (result.ok) assert.equal(result.spam, true);
  });
});
