import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

const theme = create({
  base: 'dark',
  brandTitle: 'StoryBook',
  brandUrl: 'https://xzzz.xyz/',
  // brandImage: 'https://place-hold.it/200x50/2f2f2f/fff&text=Vapor-C&fontsize=28'
})

addons.setConfig({
  // isFullscreen: true,
  // showNav: true,
  // showPanel: true,
  // panelPosition: 'bottom',
  // enableShortcuts: true,
  // isToolshown: true,
  theme: theme,
  // selectedPanel: undefined,
  // initialActive: 'sidebar',
  // sidebar: {
  //   showRoots: false,
  //   collapsedRoots: ['other'],
  // },
  // toolbar: {
  //   title: { hidden: false },
  //   zoom: { hidden: true },
  //   eject: { hidden: true },
  //   copy: { hidden: true },
  //   'storybook/background': { hidden: true },
  //   fullscreen: { hidden: false },
  // },
})
