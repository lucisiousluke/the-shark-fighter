module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}", // make sure this matches your file structure
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    textTransform: true,  // Explicitly enable textTransform utilities
  },
  plugins: [],
}
