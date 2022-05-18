// https://github.com/storybookjs/builder-vite#customize-vite-config
// https://github.com/Miguel-Bento-Github/vite-vue-ts-storybook/blob/main/.storybook/main.js
import customConfig from './vite.config' // 这里不能是vite.config.js或ts
import { loadConfigFromFile, mergeConfig } from 'vite'
// import path from 'path' // https://stackoverflow.com/questions/41553291/can-you-import-nodes-path-module-using-import-path-from-path
import type { StorybookViteConfig } from '@storybook/builder-vite'
// https://github.com/storybookjs/builder-vite/issues/85
// import tsconfigPaths from 'vite-tsconfig-paths'

// 不要忘了 dogen https://github.com/storybookjs/builder-vite
// plop

const config: StorybookViteConfig  = {
  "stories": [
    "../docs/**/*.stories.mdx",
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // {
    //   // https://theodorusclarence.com/blog/nextjs-storybook-tailwind
    //   /**
    //    * Fix Storybook issue with PostCSS@8
    //    * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
    //    */
    //   name: '@storybook/addon-postcss',
    //   options: {
    //     postcssLoaderOptions: {
    //       implementation: require('postcss'),
    //     },
    //   },
    // },
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  viteFinal: async (preConfig, { configType }) => {
    // !preConfig.plugins && (preConfig.plugins = [])
    // preConfig.plugins.push(
    //   /** @see https://github.com/aleclarson/vite-tsconfig-paths */
    //   tsconfigPaths({
    //     projects: [path.resolve(path.dirname(__dirname), ".storybook", "tsconfig.json")],
    //   })
    // )
    // // 非类型声明! 而是解构赋值
    // const { config } = await loadConfigFromFile(
    //   path.resolve(__dirname, "./vite.config.ts")
    // )

    // 后端正常 前端报错: Uncaught Error: Singleton client API not yet initialized, cannot call addParameters
    // https://github.com/storybookjs/storybook/issues/10887#issuecomment-901109891
    preConfig.resolve.dedupe = ["@storybook/client-api"]
    // 合并配置
    return mergeConfig(preConfig, {
      // customize the Vite config here
      ...customConfig,
    })
  },
}

export default config
