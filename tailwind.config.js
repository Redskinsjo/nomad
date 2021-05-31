const plugin = require("tailwindcss/plugin");

module.exports = {
  calc: true,
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        "green-nomad": "#00E676",
        "dark-green-nomad": "#00D262",
        "blue-nomad": "#232340",
        "section-hero": "#f0EEE9",
        tiles: "#E8E6E1",
      },
      textColor: {
        "green-nomad": "#00E676",
        "blue-nomad": "#232340",
      },
      spacing: {
        "380px": "380px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover", "active"],
      textColor: ["active"],
      animation: ["hover"],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".w-203px": {
          width: "203px",
        },
        ".w-389px": {
          width: "389px",
        },
        ".w-424px": {
          width: "424px",
        },
        ".min-w-20px": {
          minWidth: "20px",
        },
        ".max-w-750px": {
          maxWidth: "750px",
        },
        ".max-w-950px": {
          maxWidth: "950px",
        },
        ".max-w-1200px": {
          maxWidth: "1200px",
        },
        ".h-26px": {
          height: "26px",
        },
        ".h-64px": {
          height: "64px",
        },
        ".h-96px": {
          height: "96px",
        },
        ".h-114px": {
          height: "114px",
        },
        ".h-316px": {
          height: "316px",
        },
        ".h-638px": {
          height: "638px",
        },

        ".p-t-19px": {
          paddingTop: "19px",
        },
        ".p-b-19px": {
          paddingBottom: "19px",
        },
        ".p-l-16px": {
          paddingLeft: "16px",
        },
        ".p-r-16px": {
          paddingRight: "16px",
        },
        ".py-65px": {
          paddingTop: "65px",
          paddingBottom: "65px",
        },
        ".px-130px": {
          paddingLeft: "130px",
          paddingRight: "130px",
        },
        ".mt-64px": {
          marginTop: "64px",
        },
        ".border-blue-nomad": {
          borderColor: "#232340",
        },
        ".bg-green-nomad": {
          backgroundColor: "#00E676",
        },
        ".font-radikal-bold": {
          fontFamily: "Radikal-bold",
        },
        ".font-roboto-thin": {
          fontFamily: "Roboto",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
