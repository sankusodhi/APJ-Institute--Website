export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px -20px rgba(15, 23, 42, 0.35)',
      },
      backgroundImage: {
        'medical-grid': 'linear-gradient(rgba(255,255,255,0.94), rgba(255,255,255,0.94)), radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.09) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
}
