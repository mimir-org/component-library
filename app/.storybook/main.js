// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

// eslint-disable-next-line no-undef
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: true
  },
  core: {
    disableTelemetry: true
  },
  webpackFinal: async config => {
    config.resolve.plugins = [new TsconfigPathsPlugin({
      extensions: config.resolve.extensions
    })];

    // This modifies the existing image rule to exclude `.svg` files since we handle those with `@svgr/webpack`.
    const fileLoaderRule = config.module.rules.find(rule => rule.test?.test('.svg'),);
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config;
  }
};