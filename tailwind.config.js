/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/*.tsx',
    './components/**/*.{tsx, js}',
    './blog_articles/*.mdx',
    './project_articles/*.mdx'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
  important: true,
  // corePlugins: {
  //   preflight: false,
  // }
}
