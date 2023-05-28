import { create } from '@storybook/theming';
import logo from "./logo.svg";

export default create({
  base: 'dark',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Mimirorg component library',
  brandUrl: 'https://github.com/mimir-org/component-library',
  brandImage: logo,
  brandTarget: '_self',
});
