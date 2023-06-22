/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        plum: "#caa1fc",
        blueviolet: "#7001e1",
        gray: "#130128",
      },
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
