import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  daisyui: {
  themes: [
    {
      mytheme: {
      
"primary": "#0048ff",
      
"secondary": "#1f2937",
      
"accent": "#e7e5e4",
      
"neutral": "#110305",
      
"base-100": "#fdfff2",
      
"info": "#006bc4",
      
"success": "#00b300",
      
"warning": "#ff9a00",
      
"error": "#e11d48",
      },
    },
  ],
 
  },

  
  plugins: [daisyui],
}

