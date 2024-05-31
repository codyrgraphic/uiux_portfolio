/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js"],

  theme: {
    extend: {
      fontFamily: {
        gotham: ["Gotham", "sans-serif"],
      },
      fontSize: {
        "2xs": "0.75rem", // 12px
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        lg: "1.2rem", // 19px
        xl: "1.5rem", // 24px
        "2xl": "1.75rem", // 28px
        "3xl": "2rem", // 32px
        "4xl": "2.5rem", // 40px
      },
      spacing: {
        "4xs": "1px",
        "3xs": "2px",
        "2xs": "4px",
        xs: "6px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "48px",
        "4xl": "64px",
        "5xl": "80px",
        "6xl": "96px",
        "7xl": "128px",
        "8xl": "160px",
        btn: "64px",
        "text-input": "46px",
        header: "100px",
      },
      borderRadius: {
        "4xs": "1px",
        "3xs": "2px",
        "2xs": "4px",
        xs: "6px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "48px",
        "4xl": "64px",
        "5xl": "80px",
        "6xl": "96px",
        "7xl": "128px",
        "8xl": "160px",
      },
      borderWidth: {
        sm: "0.5px",
        md: "1px",
        lg: "2px",
      },
      blur: {
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
        8: "8px",
        9: "9px",
        10: "10px",
        11: "11px",
        12: "12px",
        13: "13px",
        14: "14px",
        15: "15px",
        16: "16px",
        17: "17px",
        18: "18px",
        19: "19px",
        20: "20px",
        21: "21px",
        22: "22px",
        23: "23px",
        24: "24px",
      },
      fontWeight: {
        light: "100",
        book: "300",
        medium: "500",
      },
      animation: {
        "ping-slow": "ping-slow 5s cubic-bezier(0, 0, 0.01, 1) infinite",
        "pulse-strong": "pulse-strong 5s cubic-bezier(0.1, 0, 0.8, 1) infinite",
        "spin-slow": "spin-slow 4s linear infinite",
      },
      keyframes: {
        "ping-slow": {
          "30%, 100%": { transform: "scale(1.8)", opacity: "0" },
        },
        "pulse-strong": {
          "0%, 100%": {
            opacity: 0.75,
          },
          "50%": {
            opacity: 0.1,
          },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
    plugins: [],
  },
};
