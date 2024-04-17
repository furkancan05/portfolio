/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#030303",
        primary: "#ff4532",
        card: "#3c3f42",
        white: "#e5e5e8",
        black: "#292f36",
      },

      dropShadow: {
        "button-shadow": "0 0 10px rgb(254, 201, 107)",
      },

      keyframes: {
        view: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        shadow_pulse: {
          // "0%": "shadow-[0_0_0_0_rgba(255,69,50,0.3)]",
          // "100%": "shadow-[0_0_0_30px_rgba(255,69,50,0.3)]",
          "100%": { opacity: 1 },
        },
      },

      animation: {
        view: "view 300ms linear",
        shadow_pulse: "shadow_pulse 2s linear infinite",
      },
    },
  },
  plugins: [],
};
