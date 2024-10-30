/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./view/*.{html,js}",
    "./js/*.{html,js}",
    "./css/*.{html,js}",
  ],
    variants: {
        extend: {
            textColor: ['responsive', 'hover', 'focus', 'group-hover'],
            fontSize: ["hover", "focus"],
            backgroundOpacity: ["active"],
            borderWidth: ["hover", "focus"],
        },
    },
    plugins: [],
    theme: {
      extend: {
        animation: {
          'spin-slow': 'spin 3s linear infinite', // Custom slow spin animation
          'slide-in-down': 'slide-in-down 0.5s ease-out', // Custom slide-in-down animation
          'fade-in-slow': 'fade-in-slow 2s ease-out' // Custom slow fade-in animation
        },
        keyframes: {
          'slide-in-down': {
            '0%': { transform: 'translateY(-100%)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          'fade-in-slow': {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
        },
      },
    },
   
}

