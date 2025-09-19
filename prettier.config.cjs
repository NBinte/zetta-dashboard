/** @type {import("prettier").Config} */
module.exports = {
  // Core
  printWidth: 100,
  singleQuote: false,
  trailingComma: "all",
  semi: true,
  arrowParens: "always",
  endOfLine: "lf",

  // Tailwind v4 class sorter
  plugins: ["prettier-plugin-tailwindcss"],

  // Optional: keep markdown tidy
  overrides: [
    {
      files: "*.md",
      options: { proseWrap: "always" },
    },
  ],
};
