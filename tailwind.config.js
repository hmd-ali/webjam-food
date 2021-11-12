module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,jsx,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'background': '#F1FAEE',
        'accent-red': '#E63946',
        'accent-blue-100': '#A8DADC',
        'accent-blue-200': '#457B9D',
        'accent-blue-300': '#1D3557',
      },
      fontFamily:{
        'custom' : ['Seaweed Script', 'cursive'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
