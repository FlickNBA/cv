/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        redd: "rgb(var(--red-1) / <alpha-value>)",
        reddd: "rgb(var(--red-2) / <alpha-value>)",
        grayy: "rgb(var(--gray-1) / <alpha-value>)",
        grayyy: "rgb(var(--gray-2) / <alpha-value>)",
        whitee: "rgb(var(--white) / <alpha-value>)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
