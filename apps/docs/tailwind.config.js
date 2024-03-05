import config from "@atg-tools/tailwindcss-config/tailwind.config.js";

const sharedConfig = {
  ...config,
  content: ["./**/*.{js,jsx,ts,tsx,mdx}"],
};

export default sharedConfig;
