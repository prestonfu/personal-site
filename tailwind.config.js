module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'inter': ["Inter", "Segoe UI"],
      //   'sfmono': ["SFMono"],
      //   'messinasans': ["MessinaSans", "Segoe UI"],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          light: '#e1f5fe',
          DEFAULT: '#0288d1',
          dark: '#2e59ba',
        },
        footercolor: {
          light: "aaaaaa",
          DEFAULT: '#f4f4f4',
        },
      },
      boxShadow: {
        blue : '0 0px 10px 0px rgba(2, 136, 209, 0.7)'
      },
      height: {
        screenBigger: '125vh'
      },
      listStyleType: {
        square: 'square',
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
