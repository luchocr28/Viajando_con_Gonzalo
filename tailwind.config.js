/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#326282',
          50: '#f0f5f9',
          100: '#dae7f0',
          200: '#b6cee1',
          300: '#89acc9',
          400: '#5b87ab',
          500: '#326282',
          600: '#274e69',
          700: '#224258',
          800: '#1f384c',
          900: '#0c1d2e',
        },
        darkblue: {
          DEFAULT: '#071c3d',
          50: '#e7ecf4',
          100: '#c3cee0',
          200: '#9aabc9',
          300: '#6d83ac',
          400: '#3f5c8c',
          500: '#071c3d',
          600: '#061733',
          700: '#051129',
          800: '#040c1f',
          900: '#020714',
        },
        lightblue: {
          DEFAULT: '#406e8d',
          50: '#f0f6f9',
          100: '#dae9f0',
          200: '#b9d4e2',
          300: '#8fb6cd',
          400: '#5d92b0',
          500: '#406e8d',
          600: '#365a73',
          700: '#2d4a5f',
          800: '#253b4e',
          900: '#1c2c39',
        },
        textgray: '#232323',
        success: {
          DEFAULT: '#2f8f5f',
          light: '#e6f4ec',
          dark: '#1f6b45',
        },
        warning: {
          DEFAULT: '#c98a2b',
          light: '#fbf0dd',
        },
        accent: {
          DEFAULT: '#d4a648',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
        },
        screens: {
          '2xl': '1280px',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'fade-in-up': 'fadeInUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in-down': 'fadeInDown 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
