module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        cocoa: {
          950: "#1F0D04",
          900: "#2A1207",
          800: "#38190B",
          700: "#45200E",
          600: "#54290F",
        },
        cream: {
          DEFAULT: "#F8ECD7",
          soft: "#F3DFC0",
        },
        coral: {
          DEFAULT: "#E4573F",
          deep: "#C43F2B",
        },
        sunshine: "#F2A93B",
        tan: {
          DEFAULT: "#D9A05B",
          soft: "#C98D4F",
        },
      },
      fontFamily: {
        display: ['"Baloo 2"', "cursive"],
        body: ['"Quicksand"', "sans-serif"],
      },
      boxShadow: {
        "coral-sm": "0 6px 12px rgba(228, 87, 63, 0.4)",
        "coral-md": "0 10px 22px rgba(228, 87, 63, 0.4)",
        "coral-lg": "0 14px 28px rgba(228, 87, 63, 0.4)",
        soft: "0 8px 18px rgba(0, 0, 0, 0.3)",
        pill: "0 14px 30px rgba(0, 0, 0, 0.35)",
        badge: "0 14px 24px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
