module.exports = {
  content: ["./src/**/*.{html,ts,}"],
  theme: {
    extend: {
      colors: {
        primary: {
          lightest: "var(--color-primary-lightest)",
          lighter: "var(--color-primary-lighter)",
          light: "var(--color-primary-light)",
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
          darker: "var(--color-primary-darker)",
          darkest: "var(--color-primary-darkest)",
        },
        secondary: {
          lightest: "var(--color-secondary-lightest)",
          lighter: "var(--color-secondary-lighter)",
          light: "var(--color-secondary-light)",
          DEFAULT: "var(--color-secondary)",
          dark: "var(--color-secondary-dark)",
          darker: "var(--color-secondary-darker)",
          darkest: "var(--color-secondary-darkest)",
        },
        tertiary: {
          lightest: "var(--color-tertiary-lightest)",
          lighter: "var(--color-tertiary-lighter)",
          light: "var(--color-tertiary-light)",
          DEFAULT: "var(--color-tertiary)",
          dark: "var(--color-tertiary-dark)",
          darker: "var(--color-tertiary-darker)",
          darkest: "var(--color-tertiary-darkest)",
        },
        neutral: {
          lightest: "var(--color-neutral-lightest)",
          lighter: "var(--color-neutral-lighter)",
          light: "var(--color-neutral-light)",
          DEFAULT: "var(--color-neutral)",
          dark: "var(--color-neutral-dark)",
          darker: "var(--color-neutral-darker)",
          darkest: "var(--color-neutral-darkest)",
        },
      },
    },
  },
  plugins: [],
};
