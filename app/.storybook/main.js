const {
  TsconfigPathsPlugin
} = require('tsconfig-paths-webpack-plugin');
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  staticDirs: ['../public'],
  core: {
    disableTelemetry: true
  },
  webpackFinal: async config => {
    config.resolve.plugins = [new TsconfigPathsPlugin({
      extensions: config.resolve.extensions
    })];
    return config;
  },
  docs: {
    autodocs: true
  }
};