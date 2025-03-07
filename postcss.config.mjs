/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {
      theme: {
        // Some useful comment
        extend: {
          fontFamily: {
            'protest': ["Protest Revolution", 'sans-serif'],
            'anton': ['Anton', 'sans-serif'],
          },
        },
      },
    },
  },
};

export default config;
