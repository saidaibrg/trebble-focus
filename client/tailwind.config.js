/** @type {import('tailwindcss').Config} */

import {nextui} from '@nextui-org/theme'

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
 
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
  darkMode: "class",
  plugins: [nextui()]
}