
// Typography
export const typography = {
  fonts: {
    primary: "Inter",
    secondary: "Roboto",
  },
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 30,
    "4xl": 36,
  },
};

// Colors
export const colors = {
  "primary-50": "#E6F6FF",
  "primary-100": "#BAE3FF",
  "primary-200": "#7CC4FA",
  "primary-300": "#47A3F3",
  "primary-400": "#2186EB",
  "primary-500": "#0967D2",
  "primary-600": "#0552B5",
  "primary-700": "#03449E",
  "primary-800": "#01337D",
  "primary-900": "#002159",
  "neutral-50": "#F8F9FA",
  "neutral-100": "#F1F3F5",
  "neutral-200": "#E9ECEF",
  "neutral-300": "#DEE2E6",
  "neutral-400": "#CED4DA",
  "neutral-500": "#ADB5BD",
  "neutral-600": "#868E96",
  "neutral-700": "#495057",
  "neutral-800": "#343A40",
  "neutral-900": "#212529",
  success: "#2E7D32",
  warning: "#ED6C02",
  error: "#D32F2F",
  info: "#0288D1",
};

// Spacing
export const spacing = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 40,
  "3xl": 48,
  "4xl": 56,
  "5xl": 64,
};

// Types
export type Typography = typeof typography;
export type Colors = typeof colors;
export type Spacing = typeof spacing;
