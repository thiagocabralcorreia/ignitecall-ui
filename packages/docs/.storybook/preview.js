import { themes } from "@storybook/theming";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
  backgrounds: {
    default: "dark",
    values: [
      {
        name: "light",
        value: "#F8F8F8",
      },
      {
        name: "dark",
        value: "#333333",
      },
    ],
  },
};
