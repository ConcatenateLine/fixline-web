import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        cream: { value: "#FDFDF6" },
        black: { value: "#000000" },
        gray: {
          50: { value: "#f7f7f8" },
          100: { value: "#e8e8e9" },
          200: { value: "#d0d1d2" },
          300: { value: "#b3b3b4" },
          400: { value: "#999a9c" },
          500: { value: "#808081" },
          600: { value: "#626263" },
          700: { value: "#49494a" },
          800: { value: "#323233" },
          900: { value: "#1e1e1f" },
        },
        blue: {
          50: { value: "#e6f2ff" },
          100: { value: "#bfdeff" },
          200: { value: "#99caff" },
          300: { value: "#70b4ff" },
          400: { value: "#4a9bff" },
          500: { value: "#2583ff" },
          600: { value: "#116ae6" },
          700: { value: "#0b52b3" },
          800: { value: "#063c80" },
          900: { value: "#03254d" },
        },
        brand: {
          DEFAULT: { value: "#9bcb00" },
          50: { value: "#f5ffe6" },
          100: { value: "#e3fcb3" },
          200: { value: "#d2f980" },
          300: { value: "#B4E400" },
          400: { value: "#9bcb00" },
          500: { value: "#84b300" },
          600: { value: "#6d9a00" },
          700: { value: "#578000" },
          800: { value: "#426600" },
          900: { value: "#2f4d00" },
        },
        red: {
          DEFAULT: { value: "#E53E3E" },
          50: { value: "#fff5f5" },
          100: { value: "#fed7d7" },
          200: { value: "#feb2b2" },
          300: { value: "#fc8181" },
          400: { value: "#F56565" },
          500: { value: "#E53E3E" },
          600: { value: "#c53030" },
        },
        accent: {
          DEFAULT: { value: "#6FCF97" },
          100: { value: "#e6f7ed" },
          200: { value: "#c0ebd6" },
          300: { value: "#97debd" },
          400: { value: "#6FCF97" },
          500: { value: "#57B785" },
          600: { value: "#429c70" },
        },
        status: {
          success: { 500: { value: "#9bcb00" } },
          error: { 500: { value: "#F56565" } },
          warning: { 500: { value: "#D69E2E" } },
        },
        orange: {
          500: { value: "#ED8936" },
        },
        green: {
          500: { value: "#38A169" },
        },
      },
      fonts: {
        heading: { value: `'Geist Sans', 'Inter', sans-serif` },
        body: { value: `'Geist Sans', 'Inter', sans-serif` },
        mono: { value: `'Geist Mono', monospace` },
      },
      spacing: {
        "1": { value: "0.25rem" },
        "2": { value: "0.5rem" },
        "3": { value: "0.75rem" },
        "4": { value: "1rem" },
        "5": { value: "1.25rem" },
        "6": { value: "1.5rem" },
        "8": { value: "2rem" },
        "10": { value: "2.5rem" },
        "12": { value: "3rem" },
        "16": { value: "4rem" },
        "20": { value: "5rem" },
        "24": { value: "6rem" },
        "28": { value: "7rem" },
        "32": { value: "8rem" },
        "40": { value: "10rem" },
        "48": { value: "12rem" },
        "56": { value: "14rem" },
        "64": { value: "16rem" },
        "72": { value: "18rem" },
        "80": { value: "20rem" },
        "96": { value: "24rem" },
      },
    },
    semanticTokens: {
      colors: {
        "primary-brand": {
          value: {
            base: "colors.brand.400",
            _dark: "colors.brand.300",
            description: "The primary brand color used for brand elements.",
          },
        },
        "primary-accent": {
          value: {
            base: "colors.red.500",
            _dark: "colors.red.400",
            description: "The primary accent color used for accent elements.",
          },
        },
        "secondary-accent": {
          value: {
            base: "color-mix(in oklab, {colors.red.400} 20%, {colors.cream})",
            _dark:
              "color-mix(in oklab, {colors.red.700} 10%, {colors.gray.900})",
            description:
              "The secondary accent color used for muted accent elements.",
          },
        },
        "secondary-brand": {
          value: {
            base: "color-mix(in oklab, {colors.brand.400} 20%, {colors.cream})",
            _dark:
              "color-mix(in oklab, {colors.brand.700} 10%, {colors.gray.900})",
            description:
              "The secondary brand color used for muted brand elements.",
          },
        },
        "transparent-blur": {
          value: {
            base: "color-mix(in oklab, {colors.cream} 60%, transparent)",
            _dark: "color-mix(in oklab, {colors.gray.900} 60%, transparent)",
            description: "Transparent color with blur effect.",
          },
        },
        "bg-canvas": {
          value: {
            base: "colors.cream",
            _dark: "colors.gray.900",
            description:
              "The main, outermost background color of the application.",
          },
        },
        "bg-surface": {
          value: {
            base: "colors.white",
            _dark: "colors.gray.800",
            description:
              "The background color for cards, modals, and other UI surfaces.",
          },
        },
        "bg-surfaceb": {
          value: {
            base: "colors.gray.50",
            _dark: "colors.gray.700",
            description:
              "A secondary surface background, used for nested or subtle container differentiation.",
          },
        },
        "bg-surface-alt": {
          value: {
            base: "colors.gray.800",
            _dark: "colors.white",
            description:
              "The inverted background color for cards, modals, and other UI surfaces.",
          },
        },
        "text-primary": {
          value: {
            base: "colors.black",
            _dark: "colors.cream",
            description: "Primary text color for body copy and headings.",
          },
        },
        "text-primary-alt": {
          value: {
            base: "colors.cream",
            _dark: "colors.black",
            description:
              "Alternative primary text color for body copy and headings.",
          },
        },
        "text-secondary": {
          value: {
            base: "colors.gray.600",
            _dark: "colors.gray.400",
            description:
              "Secondary text color for muted or less important information.",
          },
        },
        link: {
          value: {
            base: "colors.red.500",
            _dark: "colors.red.400",
            description: "The color for all standard text links.",
          },
        },
        "link-hover": {
          value: {
            base: "colors.red.600",
            _dark: "colors.red.500",
            description: "The color for links on hover.",
          },
        },
        "action-primary": {
          value: {
            base: "colors.brand.400",
            _dark: "colors.brand.300",
            description:
              "The primary action color used for main buttons and calls to action.",
          },
        },
        "action-hover": {
          value: {
            base: "colors.brand.500",
            _dark: "colors.brand.400",
            description:
              "The hover state of action buttons, used to indicate interactivity.",
          },
        },
        "action-text": {
          value: {
            base: "colors.black",
            _dark: "colors.black",
            description:
              "The text color of action buttons, used for button labels.",
          },
        },
        "interactive-disabled": {
          value: { base: "colors.gray.300", _dark: "colors.gray.700" },
          description:
            "Color for disabled interactive elements like buttons and inputs.",
        },
        "icon-default": {
          value: { base: "colors.gray.600", _dark: "colors.gray.400" },
          description: "Default color for icons.",
        },
        "icon-muted": {
          value: { base: "colors.gray.400", _dark: "colors.gray.600" },
          description: "Color for secondary or less prominent icons.",
        },
        "skeleton-loader-base": {
          value: { base: "colors.gray.100", _dark: "colors.gray.700" },
          description: "Base color of a skeleton loading state.",
        },
        "skeleton-loader-highlight": {
          value: { base: "colors.gray.200", _dark: "colors.gray.600" },
          description: "Highlight color of a skeleton loader.",
        },
        "priority-low": {
          value: { base: "colors.gray.400", _dark: "colors.gray.500" },
          description: "Color for low-priority tickets.",
        },
        "priority-medium": {
          value: { base: "colors.orange.500", _dark: "colors.orange.400" },
          description: "Color for medium-priority tickets.",
        },
        "priority-high": {
          value: { base: "colors.red.500", _dark: "colors.red.400" },
          description: "Color for high-priority tickets.",
        },
        "ticket-new": {
          value: {
            base: "colors.blue.500",
            _dark: "colors.blue.400",
            description: "The color of new tickets, used to indicate new.",
          },
        },
        "ticket-pending": {
          value: { base: "colors.gray.400", _dark: "colors.gray.500" },
          description:
            "Color for tickets that are pending action from an external party.",
        },
        "ticket-open": {
          value: {
            base: "colors.status.warning.500",
            _dark: "colors.status.warning.400",
            description:
              "The color of open tickets, used to indicate open or in-progress tickets.",
          },
        },
        "ticket-resolved": {
          value: {
            base: "colors.status.success.500",
            _dark: "colors.status.success.400",
            description:
              "The color of resolved tickets, used to indicate resolved or completed tickets.",
          },
        },
        "ticket-closed": {
          value: {
            base: "colors.gray.500",
            _dark: "colors.gray.600",
            description:
              "Color for tickets that have been closed and are no longer active.",
          },
        },
        "ticket-critical": {
          value: {
            base: "colors.status.error.500",
            _dark: "colors.status.error.400",
            description:
              "The color of critical tickets, used to indicate critical or high-priority tickets.",
          },
        },
      },
      shadows: {
        sm: {
          value: {
            _light: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            _dark: "0 1px 2px 0 rgb(255 255 255 / 0.05)",
          },
        },
        DEFAULT: {
          value: {
            _light:
              "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
            _dark:
              "0 1px 3px 0 rgb(255 255 255 / 0.1), 0 1px 2px -1px rgb(255 255 255 / 0.1)",
          },
        },
        md: {
          value: {
            _light:
              "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            _dark:
              "0 4px 6px -1px rgb(255 255 255 / 0.1), 0 2px 4px -2px rgb(255 255 255 / 0.1)",
          },
        },
        lg: {
          value: {
            _light:
              "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            _dark:
              "0 10px 15px -3px rgb(255 255 255 / 0.1), 0 4px 6px -4px rgb(255 255 255 / 0.1)",
          },
        },
        xl: {
          value: {
            _light:
              "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            _dark:
              "0 20px 25px -5px rgb(255 255 255 / 0.1), 0 8px 10px -6px rgb(255 255 255 / 0.1)",
          },
        },
        "2xl": {
          value: {
            _light: "0 25px 70px -12px rgb(0 0 0 / 0.25)",
            _dark: "0 25px 50px -12px rgb(255 255 255 / 0.25)",
          },
        },
        inner: {
          value: {
            _light: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
            _dark: "inset 0 2px 4px 0 rgb(255 255 255 / 0.05)",
          },
        },
      },
      spacing: {
        page: {
          value: "spacing.12",
          description:
            "Vertical spacing between elements or sections on a page",
        },
        section: {
          value: "spacing.8",
          description: "Vertical spacing between major layout sections",
        },
        stack: {
          value: "spacing.6",
          description:
            "Vertical spacing between stacked components (e.g. cards, form fields)",
        },
        formGroup: {
          value: "spacing.4",
          description: "Vertical spacing between grouped form fields",
        },
        paragraph: {
          value: "spacing.3",
          description: "Spacing between paragraphs or text blocks",
        },
        listItem: {
          value: "spacing.2",
          description: "Spacing between items in a vertical list",
        },

        horizontalStack: {
          value: "spacing.4",
          description:
            "Horizontal spacing between inline components (e.g. buttons, icons)",
        },
        horizontalSection: {
          value: "spacing.6",
          description:
            "Horizontal spacing between layout sections in a grid or row",
        },
        horizontalListItem: {
          value: "spacing.3",
          description: "Spacing between items in a horizontal list or carousel",
        },
        buttonGroup: {
          value: "spacing.2",
          description: "Spacing between horizontally aligned buttons",
        },
        iconText: {
          value: "spacing.2",
          description: "Spacing between an icon and its adjacent text",
        },

        layoutPadding: {
          value: "spacing.8",
          description: "Default padding inside layout containers",
        },
        containerPadding: {
          value: "spacing.6",
          description: "Default padding inside containers",
        },
        cardPadding: {
          value: "spacing.5",
          description: "Internal padding for card components",
        },
        modalSpacing: {
          value: "spacing.7",
          description: "Spacing between modal content blocks",
        },
        alertSpacing: {
          value: "spacing.3",
          description: "Spacing between alert icon and message",
        },
        iconPadding: {
          value: "spacing.2",
          description: "Padding for icons in cards and other components",
        },
      },
      borders: {
        "border-subtle": {
          value: {
            base: "1px solid {colors.gray.200}",
            _dark: "1px solid {colors.gray.700}",
            description:
              "A subtle border color for non-critical dividers and outlines.",
          },
        },
        "border-emphasized": {
          value: {
            base: "1px solid {colors.gray.300}",
            _dark: "1px solid {colors.gray.600}",
            description:
              "A more visible border color for important separators or interactive elements.",
          },
        },
        "border-focus": {
          value: {
            base: "1px solid {colors.blue.500}",
            _dark: "1px solid {colors.blue.300}",
          },
          description:
            "Border color for focused elements like text inputs and buttons.",
        },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;
