/**
 * يولّد أيقونة المتصفح وصورة المشاركة بدون مكتبات خارجية.
 * مولّد next/og يتعطل إذا كان مسار المشروع يحتوي حروفاً غير لاتينية.
 */
import { deflateSync } from "node:zlib";
import { writeFileSync } from "node:fs";

const NAVY = [30, 58, 138];
const DEEP = [11, 31, 77];
const GOLD = [245, 158, 11];
const GOLD_SOFT = [251, 191, 36];

function crc32(buffer) {
  let crc = ~0;
  for (let i = 0; i < buffer.length; i += 1) {
    crc ^= buffer[i];
    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }
  return ~crc >>> 0;
}

function chunk(type, data) {
  const name = Buffer.from(type);
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const checksum = Buffer.alloc(4);
  checksum.writeUInt32BE(crc32(Buffer.concat([name, data])));
  return Buffer.concat([length, name, data, checksum]);
}

function createPng(width, height, paint) {
  const stride = width * 3 + 1;
  const raw = Buffer.alloc(stride * height);
  for (let y = 0; y < height; y += 1) {
    const row = y * stride;
    raw[row] = 0;
    for (let x = 0; x < width; x += 1) {
      const [r, g, b] = paint(x, y);
      const index = row + 1 + x * 3;
      raw[index] = r;
      raw[index + 1] = g;
      raw[index + 2] = b;
    }
  }

  const header = Buffer.alloc(13);
  header.writeUInt32BE(width, 0);
  header.writeUInt32BE(height, 4);
  header[8] = 8;
  header[9] = 2;

  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk("IHDR", header),
    chunk("IDAT", deflateSync(raw)),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

function inside(x, y, left, top, width, height) {
  return x >= left && x < left + width && y >= top && y < top + height;
}

function circle(x, y, cx, cy, radius) {
  const dx = x - cx;
  const dy = y - cy;
  return dx * dx + dy * dy <= radius * radius;
}

function iconPaint(size) {
  return (x, y) => {
    const bars = [
      { top: 0.28, width: 0.22 },
      { top: 0.42, width: 0.4 },
      { top: 0.56, width: 0.58 },
      { top: 0.7, width: 0.78 },
    ];
    for (const bar of bars) {
      const width = Math.round(size * bar.width);
      const left = Math.round((size - width) / 2);
      const top = Math.round(size * bar.top);
      const height = Math.max(2, Math.round(size * 0.1));
      if (inside(x, y, left, top, width, height)) return GOLD;
    }
    return NAVY;
  };
}

function sharePaint(x, y) {
  const width = 1200;
  const height = 630;
  let color = NAVY;
  if (x % 52 === 0 || y % 52 === 0) color = [37, 71, 158];
  if (circle(x, y, 980, 120, 58)) color = GOLD;
  if (circle(x, y, 980, 120, 32)) color = GOLD_SOFT;

  const steps = [
    { y: 250, w: 150, h: 42, fill: GOLD_SOFT },
    { y: 292, w: 230, h: 46, fill: GOLD },
    { y: 338, w: 330, h: 48, fill: [36, 81, 184] },
    { y: 386, w: 430, h: 50, fill: DEEP },
    { y: 436, w: 530, h: 52, fill: [36, 81, 184] },
    { y: 488, w: 640, h: 56, fill: DEEP },
  ];

  for (const step of steps) {
    const left = Math.round((width - step.w) / 2);
    if (inside(x, y, left, step.y, step.w, step.h)) color = step.fill;
  }

  if (inside(x, y, width / 2 - 16, 430, 32, 114)) color = [7, 20, 51];
  if (y > 548 && y < 554) color = GOLD;
  if (y >= height - 18) color = GOLD;

  return color;
}

writeFileSync("app/icon.png", createPng(32, 32, iconPaint(32)));
writeFileSync("app/apple-icon.png", createPng(180, 180, iconPaint(180)));
writeFileSync("app/opengraph-image.png", createPng(1200, 630, sharePaint));
writeFileSync(
  "app/opengraph-image.alt.txt",
  "برج بابل — تجارة الجملة في الحلة، محافظة بابل، العراق\n",
);
