import type { Config } from 'tailwindcss'

const config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EF4444',
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
        secondary: {
          DEFAULT: '#0EA5E9',
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', 'sans-serif'],
      },
      animation: {
        "navbar-slide-down": "navbar-slide-down 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "navbar-dropdown": "navbar-dropdown 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        "marquee": "marquee var(--duration) linear infinite",
        "marquee-reverse": "marquee var(--duration) linear infinite reverse",
      },
      keyframes: {
        "navbar-slide-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" }
        },
        "navbar-dropdown": {
          "0%": { 
            opacity: "0",
            transform: "rotateX(-12deg) scale(0.9)" 
          },
          "100%": { 
            opacity: "1",
            transform: "rotateX(0) scale(1)" 
          }
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      }
    },
  },
  plugins: [],
} satisfies Config

export default config 