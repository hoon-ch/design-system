import type { Preview } from "@storybook/react";

import "../globals.css";

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    options: {
      storySort: {
        order: ["guides", "utilities", "*"],
      },
    },
    docs: {
      toc: {
        disable: false,
        headingSelector: "h2, h3",
        ignoreSelector: ".docs-story h2, .docs-story h3",
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
        disable: true,
        expanded: true,
      },
    },
  },
};

export default preview;
