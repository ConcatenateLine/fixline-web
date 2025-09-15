import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          DEFAULT: { value: "#B4E400" },
          50: { value: "#f5ffe6" },
          100: { value: "#e3fcb3" },
          200: { value: "#d2f980" },
          300: { value: "#B4E400" }, // lemon green
          400: { value: "#9bcb00" },
          500: { value: "#84b300" },
          600: { value: "#6d9a00" }, // darker lemon
          700: { value: "#578000" },
          800: { value: "#426600" },
          900: { value: "#2f4d00" },
        },
        accent: {
          DEFAULT: { value: "#6FCF97" },
          100: { value: "#e6f7ed" },
          200: { value: "#c0ebd6" },
          300: { value: "#97debd" },
          400: { value: "#6FCF97" }, // mint green
          500: { value: "#57B785" },
          600: { value: "#429c70" },
        },
        danger: {
          DEFAULT: { value: "#E53E3E" },
          50: { value: "#fff5f5" },
          100: { value: "#fed7d7" },
          200: { value: "#feb2b2" },
          300: { value: "#fc8181" },
          400: { value: "#F56565" },
          500: { value: "#E53E3E" },
          600: { value: "#c53030" },
        },
        warning: {
          DEFAULT: { value: "#D69E2E" },
          50: { value: "#fffaf0" },
          100: { value: "#feebc8" },
          200: { value: "#fbd38d" },
          300: { value: "#f6ad55" },
          400: { value: "#ed8936" },
          500: { value: "#D69E2E" },
        },
        success: {
          DEFAULT: { value: "#38A169" },
          50: { value: "#f0fff4" },
          100: { value: "#c6f6d5" },
          200: { value: "#9ae6b4" },
          300: { value: "#68d391" },
          400: { value: "#48bb78" },
          500: { value: "#38A169" },
        },
        background: {
          DEFAULT: { value: "#FDFDF6" },
          light: { value: "#FDFDF6" },
          dark: { value: "#1A202C" },
        },
        surface: {
          DEFAULT: { value: "#2D3748" },
          light: { value: "#FFFFFF" },
          dark: { value: "#2D3748" },
        },
        text: {
          DEFAULT: { value: "#1A202C" },
          light: { value: "#1A202C" },
          dark: { value: "#F0FFF4" },
        },
      },
      fonts: {
        heading: { value: `'Inter', sans-serif` },
        body: { value: `'Inter', sans-serif` },
        mono: { value: `'SFMono-Medium', 'SF Mono', 'Roboto Mono', monospace` },
      },
    },
    semanticTokens: {
      colors: {
        // Primary brand colors
        primary: {
          value: { base: "colors.brand.300", _dark: "colors.brand.200" },
        },
        "primary-hover": {
          value: { base: "colors.brand.400", _dark: "colors.brand.300" },
        },
        // Background colors
        "bg-primary": {
          value: { base: "colors.background.light", _dark: "colors.background.dark" },
        },
        "bg-surface": {
          value: { base: "colors.surface.light", _dark: "colors.surface.dark" },
        },
        // Text colors
        "text-primary": {
          value: { base: "colors.text.light", _dark: "colors.text.dark" },
        },
        "text-secondary": {
          value: { base: "colors.gray.600", _dark: "colors.gray.300" },
        },
        // Status colors
        "status-success": { value: "colors.success.500" },
        "status-warning": { value: "colors.warning.500" },
        "status-error": { value: "colors.danger.500" },
        "status-info": { value: "colors.blue.500" },
      },
      shadows: {
        // Custom shadows
        sm: { value: { _light: "0 1px 2px 0 rgb(0 0 0 / 0.05)", _dark: "0 1px 2px 0 rgb(255 255 255 / 0.05)" } },
        DEFAULT: { value: { _light: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", _dark: "0 1px 3px 0 rgb(255 255 255 / 0.1), 0 1px 2px -1px rgb(255 255 255 / 0.1)" } },
        md: { value: { _light: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", _dark: "0 4px 6px -1px rgb(255 255 255 / 0.1), 0 2px 4px -2px rgb(255 255 255 / 0.1)" } },
        lg: { value: { _light: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", _dark: "0 10px 15px -3px rgb(255 255 255 / 0.1), 0 4px 6px -4px rgb(255 255 255 / 0.1)" } },
        xl: { value: { _light: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", _dark: "0 20px 25px -5px rgb(255 255 255 / 0.1), 0 8px 10px -6px rgb(255 255 255 / 0.1)" } },
        "2xl": { value: { _light: "0 25px 70px -12px rgb(0 0 0 / 0.25)", _dark: "0 25px 50px -12px rgb(255 255 255 / 0.25)" } },
        inner: { value: { _light: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)", _dark: "inset 0 2px 4px 0 rgb(255 255 255 / 0.05)" } },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;
