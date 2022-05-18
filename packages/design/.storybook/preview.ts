import { Parameters } from '@storybook/addons'
import 'uno.css'
import './style.css'


export const parameters: Parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // https://theodorusclarence.com/blog/nextjs-storybook-tailwind#replace-storybookpreviewjs
  // set the docs panel to be the default 
  // previewTabs: {
  //   'storybook/docs/panel': { index: -1 },
  // },
}
