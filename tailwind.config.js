module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  safelist: [
    'top-[-80px]',
    'right-[150px]',
    'w-[425px]',
    'z-10',
    'hidden',
    'lg:block',
    '!hidden',
    'lg:!block',
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    textTransform: true,
  },
  plugins: [],
}
