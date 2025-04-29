module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /^(top|right|w)-\[.*\]$/,
    },
    {
      pattern: /^(hidden|block)$/,
      variants: ['lg'],
    },
    'z-10',
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    textTransform: true,
  },
  plugins: [],
};
