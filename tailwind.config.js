module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        sm: "0 2px 8px rgba(0, 0, 0, 0.25)",
        md: "0 1px 18px 10px rgba(0, 0, 0, 0.25);",
      },
      keyframes: {
        bump: {
          "0%, 100%": { transform: "scale(1)" },
          "10%": { transform: "scale(0.9)" },
          "30%": { transform: "scale(1.1)" },
          "50%": { transform: "scale(1.15)" },
        },
        mealsAppear: {
          "0%": { opacity: "0", transform: "translateY(3rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translate(-50%,-10rem)" },
          "100%": { opacity: "1", transform: "translate(-50%,0)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateX(-10rem)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        bump: "bump 600ms ease-out",
        mealsAppear: "mealsAppear 300ms ease-out forwards",
        slideDown: "slide-down 300ms ease-out forwards",
        fadeIn: "fade-in 300ms ease-out forwards",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: false,
  },
};
