import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      keyframes:{
        dropin: {
              "0%": {
                  opacity: "0",
                  transform: "scale(0)",
                  animationTimingFunction: "cubic-bezier(0.34, 1.61, 0.7, 1)",
              },
              "100%": {
                  opacity: "1",
                  transform: "scale(1)",
              },
          },
      },
      animation:{
        dropin: 'dropin 0.8s ease-in-out 0.25s 1',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        serif: ['var(--font-firaSans)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
