/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'primary': var(--primary-color),
        'secondary': var(--secondary-color),
        'tertiary': var(--tertiary-color),
        
      },
    },
  },
  plugins: [],
};
