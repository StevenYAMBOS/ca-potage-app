/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
];
export const theme = {
  fontFamily: {
    'sans': ['Inter'],
    'body': ['Inter']
  },
  extend: {
    colors: {
      myGreen: '#319718',
      myDarkGrey: '#181818',
      myLightGrey: '#282828',
      myAntiFlashWhite : '#f2f3f4',
    }
  },
};
export const plugins = [];

