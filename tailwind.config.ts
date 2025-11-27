/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#ffffff',
          secondary: '#f8fafc',
          accent: '#e2e8f0',
          text: {
            primary: '#1e293b',
            secondary: '#475569',
          }
        },
        dark: {
          primary: '#0f172a',
          secondary: '#1e293b', 
          accent: '#334155',
          text: {
            primary: '#f1f5f9',
            secondary: '#cbd5e1',
          }
        }
      },
    
    },
  },
  plugins: [],
} satisfies Config