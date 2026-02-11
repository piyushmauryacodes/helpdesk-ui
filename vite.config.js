import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f172a', // Sidebar dark
          blue: '#2563eb', // Primary blue
          light: '#f1f5f9', // Background
        }
      }
    },
  },
  plugins: [
        tailwindcss(),

  ],
}