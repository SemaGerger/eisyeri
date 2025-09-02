/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { //logo
      animation: {
        logoAni: 'logoAni 6s ease-in-out infinite',
      },
      keyframes: { 
        logoAni: {
          '0%, 40%, 100%': { transform: 'scale(1)' },
          '10%, 30%': { transform: 'scale(1.3)' },
          '20%': { transform: 'scale(1.15)' },
        },
        
    
      },
    },
  },
  plugins: [],
}