export const COOUPON_CODES = {
  BFRIDAY: "BFRIDAY",
  XMAS2024: "XMAS2024",
  MUM2025: "MUM2025",
} as const;

export type CouponCode = keyof typeof COOUPON_CODES;
