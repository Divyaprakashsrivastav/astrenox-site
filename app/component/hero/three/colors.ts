export const HERO_BG = "#04020A";

export const GLOW = {
  purple: "#6C3BFF",
  violet: "#8F5CFF",
  soft: "#B46CFF",
  blue: "#3E8BFF",
  white: "#FFFFFF",
} as const;

export const GLOW_HEX = {
  purple: 0x6c3bff,
  violet: 0x8f5cff,
  soft: 0xb46cff,
  blue: 0x3e8bff,
  white: 0xffffff,
} as const;

export const GLOW_ARRAY = [
  GLOW.purple,
  GLOW.violet,
  GLOW.soft,
  GLOW.blue,
  GLOW.white,
] as const;
