import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-vignette': 'radial-gradient(circle at center, transparent 20%, rgba(5,5,21,0.85) 100%)',
        'cosmic-gradient': 'linear-gradient(to bottom, rgba(5,5,21,0.3), rgba(10,10,35,0.7), rgba(5,5,21,1))',
      },
      animation: {
        'portal-glow': 'portal-glow 8s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'portal-glow': {
          '0%': { transform: 'translate(-50%, -50%) scale(1) opacity(0.5)', filter: 'blur(150px)' },
          '100%': { transform: 'translate(-50%, -50%) scale(1.15) opacity(0.8)', filter: 'blur(180px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;