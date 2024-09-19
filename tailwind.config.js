/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#7c3aed',
        secondary: '#64748b',
        dark: '#0f172a'
      },
      
      screens: {
        '2xl': '1320px'
      },

      fontFamily: {
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
        'nerko-one': ['Nerko One', 'cursive'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
        'exo-2': ['Exo 2', 'sans-serif'],
        'protest':['Protest Guerrilla', 'sans-serif']
      },
    },
  },
  plugins: [],
}

