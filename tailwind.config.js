/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary1: '#2A89FF',
        primary1hover: '#0065E3',
        primary2: '#1E1F24',
        primary3: '#17181C'
      }
    },
  },
  plugins: [],
}
