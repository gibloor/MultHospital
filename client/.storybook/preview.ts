import i18n from '../src/i18n'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  i18n,
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  addons: ["storybook-addon-react-router-v6"],
}