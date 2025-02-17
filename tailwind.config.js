/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "ft-regular": ["Figtree_400Regular"],
        "ft-semibold": ["Figtree_600SemiBold"],
        "ft-black": ["Figtree_900Black"],
      },
    },
  },
  plugins: [],
};
