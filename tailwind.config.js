/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"], // Ajuste o caminho se seus arquivos estiverem em subpastas
    theme: {
      extend: {
        colors: {
          brand: {
            50: '#fef2f2',
            100: '#fee2e2',
            500: '#ef4444',
            600: '#dc2626',
            700: '#b91c1c',
            900: '#7f1d1d'
          }
        }
      }
    },
    plugins: [],
  }
  