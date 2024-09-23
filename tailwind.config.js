/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    colors: {
      'primary': '#0b2f9f',
      'secondary': '#98ded9',
      'background': '#01053a',
      'text': '#c7ffd8',
      'gold': '#d8b700',
      'black': '#000',
      'white': '#faf0e6',
      'cyan': '#00f7ff',
      'purple': '#481e96',
      'gray': '#282828'
    },
    fontFamily:{
      inter: ['Inter', 'sans-serif'],
    },
    boxShadow:{
      'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      'outline': '0 0 0 3px rgba(66, 153, 225, 0.5)',
      'none': 'none',
    },
    extend: {
      fontSize:{
        0:'0',
      },
    },
    
  },
  plugins: [],
}

