// import { themes } from "@storybook/theming";

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
  },
  // docs: {
  //   theme: themes.dark,
  // },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['快速上手', '更新日志', 'Example'],
    },
  },
}
