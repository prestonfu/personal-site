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
        green: {
          light: '#27A102',
          DEFAULT: '#003447',
          dark: '#003447',
        },
        blue: {
          light: '#7396D3',
          DEFAULT: '#3B69BA',
          dark: '#223D6D',
        },
        purple: {
          light: '#b6a3f5',
          DEFAULT: '#866FF7',
          vibrant: '#4016ca',
          dark: '#5E49A3'
        },
        emerald: {
          light: '#e1f5fe',
          DEFAULT: '#0288d1',
          dark: '#01579b',
        },
        gray: {
          light: '#4B5563',
          DEFAULT: '#262D2D',
          dark: '#1F2937',
        },
        background: {
          DEFAULT: 'e4e4e4',
        },
      },
      boxShadow: {
        green : '0 0px 15px 0px rgba(80, 200, 120, 0.7)',
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
