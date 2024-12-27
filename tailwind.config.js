/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./hugo_stats.json"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      mirage: {
        bg: "#242936",
        bgnav: "#1F2430",
        title: "#FFFFFF",
        primary: "#DDDBD1",
        primaryhover: "#FFFFFF",
        secondary: "#B8CFE6",
        secondaryhover: "#C3DDF7",
        accent: "#D5FF80",
        disabled: "#6E7C8E",
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
