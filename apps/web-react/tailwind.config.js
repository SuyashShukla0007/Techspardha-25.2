/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glitch: {
          '0%': { clip: 'rect(0, 9999px, 0, 0)', transform: 'translate(0, 0)' },
          '10%': { clip: 'rect(10px, 9999px, 50px, 0)', transform: 'translate(-2px, -2px)' },
            '20%': { clip: 'rect(20px, 9999px, 60px, 0)', transform: 'translate(2px, 1px)' },
          '30%': { clip: 'rect(15px, 9999px, 55px, 0)', transform: 'translate(-1px, 2px)' },
          '40%': { clip: 'rect(25px, 9999px, 65px, 0)', transform: 'translate(1px, -1px)' },
          '50%': { clip: 'rect(10px, 9999px, 50px, 0)', transform: 'translate(0, 0)' },
          '100%': { clip: 'rect(0, 9999px, 0, 0)', transform: 'translate(0, 0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%) scale(0.8)', opacity: '0' },
          '100%': { transform: 'translateX(0) scale(1)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%) scale(0.8)', opacity: '0' },
          '100%': { transform: 'translateX(0) scale(1)', opacity: '1' },
        },
        rushToScreen: {
          '0%': {
            opacity: '0',
            transform: 'translateY(28px) scale(0.60) translateZ(0)',
            filter: 'blur(12px)',
          },
          '20%': {
            opacity: '0.6',
            transform: 'translateY(18px) scale(0.72) translateZ(0)',
            filter: 'blur(7px)',
          },
          '35%': {
            opacity: '0.85',
            transform: 'translateY(10px) scale(0.82) translateZ(0)',
            filter: 'blur(4.5px)',
          },
          '50%': {
            opacity: '1',
            transform: 'translateY(6px) scale(0.88) translateZ(0)',
            filter: 'blur(3px)',
          },
          '70%': {
            transform: 'translateY(3px) scale(0.95) translateZ(0)',
            filter: 'blur(1.2px)',
          },
          '85%': {
            transform: 'translateY(2px) scale(0.97) translateZ(0)',
            filter: 'blur(0.7px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1) translateZ(0)',
            filter: 'blur(0)',
          },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 0.8s ease-out forwards',
        slideInRight: 'slideInRight 0.8s ease-out forwards',
        glitch: 'glitch 0.5s infinite',
        rushToScreen: 'rushToScreen 700ms cubic-bezier(0.22,0.9,0.32,1) both',
      },
      transitionDuration: {
        220: '220ms',
      },
      transitionTimingFunction: {
        smoothLift: 'cubic-bezier(.2,.9,.3,1)',
      },
      fontFamily: {
        rationale: ["Rationale",'sans-serif'],
        gta: ["Pricedown",'sans-serif'],
      },
      colors:{
        primary:'#f77039',
        primaryBorder:'#ff5c00',
        customBlack:'#030100',
        customGrey:'#15130f',
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
}