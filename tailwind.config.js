/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-dark': '#050914',
        'space-secondary': '#091321',
        'space-card': '#101D30',
        'space-card-hover': '#16273f',
        'space-accent': '#54C8FF',
        'space-purple': '#9D8AFF',
        'space-success': '#42D69B',
        'space-warning': '#FFBF69',
        'space-text': '#F4F7FF',
        'space-muted': '#A5B4C8',
        'space-border': '#1A2E4C',
        'space-border-bright': '#294975',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-accent': '0 0 25px -5px rgba(84, 200, 255, 0.35)',
        'glow-purple': '0 0 25px -5px rgba(157, 138, 255, 0.35)',
        'glow-sun': '0 0 80px 15px rgba(255, 175, 50, 0.45)',
        'card-elevated': '0 12px 35px -8px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(84, 200, 255, 0.08)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, rgba(84, 200, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(84, 200, 255, 0.04) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}

