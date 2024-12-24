/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      mirage: {
        bg: "#242936",
        bgnav: "#1F2430",
        primary: "#DDDBD1",
        primaryhover: "#FFFFFF",
        secondary: "#B8CFE6",
        accent: "#D5FF80",
      },
    },
    fontFamily: {
      sans: ["InterVariable", "sans-serif"],
    },
    container: {
      padding: "2.5rem",
    },
    // extend: {
    //   typography: ({ theme }) => ({
    //     mirage: {
    //       css: {
    //         "--tw-prose-body": theme("colors.mirage.primary"),
    //         "--tw-prose-headings": theme("colors.mirage.primary"),
    //       },
    //     },
    //   }),
    // },
  },
  plugins: [require("@tailwindcss/typography")],
};
