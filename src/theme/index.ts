import {
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          DEFAULT: { value: '#B4E400' },
          50: { value: '#f5ffe6' },
          100: { value: '#e3fcb3' },
          500: { value: '#B4E400' }, // lemon green
          600: { value: '#A3D900' }, // darker lemon
        },
        accent: {
          DEFAULT: { value: '#6FCF97' },
          500: { value: '#6FCF97' }, // mint green
          600: { value: '#57B785' },
        },
        danger: {
          DEFAULT: { value: '#E53E3E' },
          500: { value: '#E53E3E' },
          600: { value: '#F56565' },
        },
        background: {
          DEFAULT: { value: '#FDFDF6' },
          light: { value: '#FDFDF6' },
          dark: { value: '#1A202C' },
        },
        surface: {
          DEFAULT: { value: '#2D3748' },
          light: { value: '#FFFFFF' },
          dark: { value: '#2D3748' },
        },
        text: {
          DEFAULT: { value: '#1A202C' },
          light: { value: '#1A202C' },
          dark: { value: '#F0FFF4' },
        },
      },
      fonts: {
        heading: { value: `'Inter', sans-serif` },
        body: { value: `'Inter', sans-serif` },
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          value: {
            base: '{colors.brand.500}',
            _dark: '{colors.brand.100}',
          },
        },
        accent: {
          value: {
            base: '{colors.accent.500}',
            _dark: '{colors.accent.600}',
          },
        },
        danger: {
          value: {
            base: '{colors.danger.500}',
            _dark: '{colors.danger.600}',
          },
        },
        background: {
          value: {
            base: '{colors.background.light}',
            _dark: '{colors.background.dark}',
          },
        },
        surface: {
          value: {
            base: '{colors.surface.light}',
            _dark: '{colors.surface.dark}',
          },
        },
        text: {
          value: {
            base: '{colors.text.light}',
            _dark: '{colors.text.dark}',
          },
        },
      },
    },
  },
});

const system = createSystem(defaultConfig, config)

export default system

