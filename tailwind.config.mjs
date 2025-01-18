/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        develoop: "#01c38e"

      },

      fontSize:{
        '60':'60px'
      },
      fontFamily:{
        'gothamlight': ['GothamLight','sans-serif'],
        'gothambold': ['GothamBold','sans-serif']
      },

      backgroundImage:{
        'hero': "url('/hero_bgwhite.png')"
      }
    },
  },
  plugins: [],
};
