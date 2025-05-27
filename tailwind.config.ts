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
          "fly-in-up": {
              "0%": {
                  opacity: "0",
                  transform: "translate3d(0, 1500px, 0)",
                  transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
              },
              "60%": {
                  opacity: "1",
                  transform: "translate3d(0, -20px, 0)"
              },
              "75%": {
                  transform: "translate3d(0, 10px, 0)"
              },
              "90%": {
                  transform: "translate3d(0, -5px, 0)"
              },
              "100%": {
                  transform: "translate3d(0, 0, 0)"
              },
          },
      },
      animation:{
        dropin: 'dropin 1.5s ease-in-out 0.5s 1',
        flyinup: 'fly-in-up 0.6s ease-in-out 0.25s 1',
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
