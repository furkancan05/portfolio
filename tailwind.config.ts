import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--colors-primary))",
        white: "rgba(var(--colors-white))",
      },
      keyframes: {
        "title-move": {
          "0%": { transform: "translateX(0px) translateY(0px)" },
          "25%": { transform: "translateX(20px) -translateY(35px)" },
          "50%": { transform: "translateX(25px) translateY(20px)" },
          "70%": { transform: "translateX(10px) translateY(4px)" },
          "100%": { transform: "translateX(0px) translateY(0px)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(100px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "title-move": "title-move 4000ms linear infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
