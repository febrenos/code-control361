/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-200': '#C0C8D2',
        'gray-300': '#919EB0',
        'gray-400': '#3D485B',
        'gray-500': '#232B3A',
        'gray-600': '#1E2431',
        'gray-700': '#1A202C',
        'gray-800': '#151A23',
        'blue-200': '#C6D2FE',
        'blue-300': '#1890FF',
        'blue-500': '#194BFB',
        'blue-600': '#1744E2',
        'blue-50': '#F4F6FF',
        'icon-button-primary': '#5E81FC',
        'green-500': '#24D164',
        'green-800': '#08660D',
        'green-icon-toast': '#54D62C',
        'purple-500': '#8565E6',
        'yellow-500': '#FACC15',
        'yellow-900': '#7A4F01',
        'yellow-icon-toast': '#FFC107',
        'red-500': '#ED4F4F',
        'red-900': '#4D3232',
        'red-icon-toast': '#FF4842',
      },
    },
  },
  plugins: [],
}
