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
        'bg': '#020617',
        'text': '#172554',
        'text2': '#eef2ff',
        'from': '#d1d5db',
        'to': '#374151',
        'button1':'#084868',
        'button2':'#F04393'
      },
      
    
    },
  },
  plugins: [],
};
export default config;
