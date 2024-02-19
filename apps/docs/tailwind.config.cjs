const sharedConfig = require("@tools/tailwindcss-config/tailwind.config.js");

module.exports = {
  ...sharedConfig,
  content: ["./**/*.{js,jsx,ts,tsx,mdx}"],
};
