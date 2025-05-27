module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      keyframes: {
        opac:{
          '0%':{
            opacity:'0'
          },
          '100%': { 
            opacity: '1'
          }
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        
        fadeSlideRight:{
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeSlideLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-out forwards',
        slideUp:'slideUp 0.5s ease-out forwards',
        fadeSlideLeft: 'fadeSlideLeft 1.5s ease-out forwards',
        fadeSlideRight: 'fadeSlideRight 1s ease-out forwards',
        opac:'opac 2s ease-out'
      },
    },
  },
  plugins: [],
}