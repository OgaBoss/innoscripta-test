/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          title: '#050505',
          body: '#4E4B66',
          button: '#667080',
          placeholder: '#A0A3BD',
          disabled: '#EEF1F4',
          primary: '#1877F2',
          error: '#ED2E7E',
          success: '#00BA88',
          warning: '#F4B740'
        },

        fontSize: {
          xs: ['12px', { lineHeight: '19.5px', letterSpacing: '0.12px' }],
          sm: ['14px', { lineHeight: '21px', letterSpacing: '0.12px' }],
          base: ['16px', { lineHeight: '24px', letterSpacing: '0.12px' }],
          lg: ['20px', { lineHeight: '30px', letterSpacing: '0.12px' }],
          xl: ['24px', { lineHeight: '36px', letterSpacing: '0.12px' }],
          '2xl': ['32px', { lineHeight: '48px', letterSpacing: '0.12px' }],
          '3xl': ['46px', { lineHeight: '72px', letterSpacing: '0.12px' }]
        }
      },
    },
    plugins: [],
  }

