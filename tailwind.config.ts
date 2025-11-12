import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: '#FFFFFF',
        'light-grey': '#F5F5F5',
        'medium-grey': '#D1D5DB',
        'dark-grey': '#4B5563',
        charcoal: '#1F2937',
        // Keeping original names for now, but mapping to new greyish tones
        // These can be refined further as we build out the UI
        bg: '#F5F5F5', // light-grey for background
        text: '#1F2937', // charcoal for primary text
        text2: '#4B5563', // dark-grey for secondary text
        from: '#D1D5DB', // medium-grey for gradients
        to: '#9CA3AF', // a slightly darker grey for gradients
        button1: '#4B5563', // dark-grey for buttons
        button2: '#6B7280', // a slightly lighter dark-grey for buttons
      },
      
    
    },
  },
  plugins: [],
};
export default config;
