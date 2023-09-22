/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '992px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [
    require('tailwindcss-themer')({
      themes: [
        {
          name: 'light',
          extend: {
            colors: {
              primary: 'black',
              secondary: 'white',
            }
          }
        },
        {
          name: 'dark',
          extend: {
            colors: {
              primary: 'white',
              secondary: 'black',
            }
          }
        }
      ],
    })
  ],
}

