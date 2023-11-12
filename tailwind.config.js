/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      animation: {
        'spin-slow': 'spin 3s linear infinite',
        // 'wiggle': 'wiggle 1s ease-in-out infinite',
      },

      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-12deg)'
          },
          '50%': { transform: 'rotate(12deg)' }
        }
      }
    },

    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['Tapestry', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      Mulish: ['Mulish', 'sans-serif'],
      Rokkitt: ['Rokkitt', 'monospace']
    }

  },
  darkMode: "class",

  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}
