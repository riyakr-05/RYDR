/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF8F4',
          50: '#FFFFFF',
          100: '#FAF8F4',
          200: '#F3EFE7',
          300: '#E8E1D5',
        },
        lavender: {
          light: '#F5F2FA',
          DEFAULT: '#EAE5F4',
          accent: '#B8A6D9',
          deep: '#8E77B5',
        },
        sage: {
          light: '#E5EDE3',
          DEFAULT: '#C9D8C5',
          dark: '#587352',
          text: '#3D5438',
        },
        peach: {
          light: '#FBF0E8',
          DEFAULT: '#F3D9C8',
          accent: '#E6B89C',
          dark: '#8E543A',
        },
        plum: {
          DEFAULT: '#302A38',
          light: '#615570',
          muted: '#857896',
          dark: '#1C1823',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(48, 42, 56, 0.05), 0 2px 6px -1px rgba(48, 42, 56, 0.03)',
        'soft-lg': '0 12px 32px -4px rgba(48, 42, 56, 0.08), 0 4px 12px -2px rgba(48, 42, 56, 0.04)',
        'soft-inner': 'inset 0 2px 4px 0 rgba(48, 42, 56, 0.04)',
        'glow-lavender': '0 0 25px rgba(184, 166, 217, 0.25)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      }
    },
  },
  plugins: [],
}
