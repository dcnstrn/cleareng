/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      fontSize: {
        h1: [
          "clamp(2.25rem, 4vw, 3.375rem)",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
        h2: [
          "clamp(2rem, 4vw, 2.75rem)",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
        h3: [
          "clamp(1.75rem, 4vw, 2.25rem)",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
      },
      colors: {
        primary: {
          10: "#535c11",
          20: "#75811f",
          30: "#98a72c",
          40: "#bacc3a",
          50: "#ddf247",
          60: "#e4f56c",
          70: "#ebf791",
          80: "#f1fab5",
          90: "#f8fcda",
        },
        gray: {
          10: "#292c32",
          20: "#393e45",
          30: "#4a4f59",
          40: "#5a616c",
          50: "#6a7280",
          60: "#7d8491",
          70: "#9096a1",
          80: "#a4a9b2",
          90: "#b7bbc2",
        },
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000000",
        blue: "#0066FF",
        lightblue: "#d9e8ff",
        darkpurple: "#241A24",
        lightgrey: "#F4F5F6",
        navyblue: "#00224A",
        darkblue: "#1E013A",
        offwhite: "rgba(255, 255, 255, 0.75)",
        lightblack: "rgba(0, 0, 0, 0.55)",
        bluish: "rgba(14, 13, 13, 0.75)",
        testColor: "rgba(54, 54, 54, 0.75)",
        grey: "#909090",
        bgblue: "#02398A",
        darkgrey: "#747474",
        faqblue: "#0861FF",
        gold: "#FAAF38",
        hoblue: "#0000FF",
        btnblue: "#267dff",
        bggrey: "#DDDDDD",
        footer: "rgba(226, 223, 223, 0.75)",
        linegrey: "#C4C4C4",
      },
      borderRadius: {
        "4xl": "32px",
      },
    },
  },
  plugins: [],
};
