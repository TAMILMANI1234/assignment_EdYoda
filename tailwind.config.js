/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-c-blue':'#0187ff',
        'customer-c-loge':'#0652ff',
        'custom-c-body':'#232c3f'
      }
    },
  },
  plugins: [],
}

