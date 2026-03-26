/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#0f172a",
          blue: "#0284c7",
          sky: "#dff4ff",
          gold: "#f59e0b",
          cream: "#fff7e8",
          leaf: "#0f766e",
          coral: "#f97316",
        },
      },
      fontFamily: {
        display: ["Tiro Devanagari Hindi", "serif"],
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 60px rgba(2, 132, 199, 0.18)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top right, rgba(245,158,11,0.28), transparent 28%), radial-gradient(circle at left center, rgba(14,165,233,0.26), transparent 30%), linear-gradient(135deg, rgba(255,255,255,0.94), rgba(223,244,255,0.96))",
      },
    },
  },
  plugins: [],
};
