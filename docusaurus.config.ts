import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OBA Docs',
  tagline: 'Documentación de Odoo by Adhoc',
  favicon: 'img/favicon.ico',

  future: {v4: true},

  url: 'https://oba-test.example.com',
  baseUrl: '/',

  organizationName: 'adhoc',
  projectName: 'oba-test',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {defaultLocale: 'es', locales: ['es']},

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['es', 'en'],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/manual',
        searchContextByPaths: ['manual/19.0', 'manual/18.0'],
        useAllContextsWithNoSearchContext: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'manual',
          lastVersion: 'current',
          versions: {
            current: {label: '19.0', path: '19.0'},
            '18.0': {label: '18.0', path: '18.0'},
          },
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'OBA Docs',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Manual',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
