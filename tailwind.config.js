/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "480px", // Extra small screens

      fontSize: {
        tiny: "0.75rem", // Custom size
        huge: "6rem", // Custom size
      },
    },
    extend: {
      gridAutoColumns: {
        "2fr": "minmax(0, 2fr)",
      },
      keyframes: {
        borderGradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        borderGradient: "borderGradient 3s ease infinite",
      },
    },
  },
  plugins: [],
};

// rgb(21, 21, 21);
// rgb(38 36 36);
