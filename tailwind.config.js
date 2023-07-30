/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'licorice': '#13070C',
        'eggplant': '#6B4D57',
        'rose':'#896A67',
        'dogwood':'#DDC8C4',
        'mint-cream':'#EFF9F0'
      },
    },
  },
  plugins: [],
}