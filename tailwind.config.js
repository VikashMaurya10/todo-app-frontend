/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        imp: "#ff000091",
        due: "#0000ff70",
        done: "#2cff00a8",
        notDone: "#a100ffa8",
        cyan: "#a5f3fc",
        gary: "rgb(107 114 128)",
      },
    },
  },
  plugins: [],
};
