import type { StorybookConfig } from "@storybook/react-vite";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypePrism from "@mapbox/rehype-prism";

const config: StorybookConfig = {
  stories: [
    "../stories/*.stories.@(js|jsx|mjs|ts|tsx|mdx)",
    "../stories/**/*.stories.tsx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypePrism],
          },
        },
      },
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    disableTelemetry: true,
  },
  //   previewHead: (head) => `
  //     ${head}
  //     <link rel="preload" href="../public/fonts/SUIT/SUIT-Variable.css" />
  //   `,
  //   previewBody: (body) => `
  //     ${body}
  //     <style>
  //       html {
  //         font-family: "SUIT Variable";
  //       }
  //     </style>
  //   `,
};
export default config;
