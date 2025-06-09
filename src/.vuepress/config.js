const type = 'website';
const url = 'https://handbook.acornglobus.com/';
const title = 'Acorn Globus Handbook';
const description =
  'A guide to everything you need to perform your work at Acorn Globus';
const mainImage = 'https://handbook.acornglobus.com/images/ag-logo.png';
const mainImageAlt = 'Acorn Globus Logo';

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: title,
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    // meta tags
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'meta',
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'format-detection', content: 'telephone=no' }],
    ['meta', { charset: 'utf-8' }],
    // Facebook
    [
      'meta',
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: title,
      },
    ],
    [
      'meta',
      {
        hid: 'og:type',
        property: 'og:type',
        content: type,
      },
    ],
    [
      'meta',
      {
        hid: 'og:url',
        property: 'og:url',
        content: url,
      },
    ],
    [
      'meta',
      {
        hid: 'og:title',
        property: 'og:title',
        content: title,
      },
    ],
    [
      'meta',
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
    ],
    [
      'meta',
      {
        hid: 'og:image',
        property: 'og:image',
        content: mainImage,
      },
    ],
    [
      'meta',
      {
        hid: 'og:image:alt',
        name: 'og:image:alt',
        content: mainImageAlt,
      },
    ],
    // Twitter
    [
      'meta',
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: url,
      },
    ],
    [
      'meta',
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: title,
      },
    ],
    [
      'meta',
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description,
      },
    ],
    [
      'meta',
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: mainImage,
      },
    ],
    [
      'meta',
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: mainImageAlt,
      },
    ],
    [
      'meta',
      {
        name: 'twitter:site',
        content: '@_formester_', // Todo: update with acorn twitter account
      },
    ],
    [
      'meta',
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    [
      'meta',
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: title,
      },
    ],
    // Linkedin
    [
      'meta',
      {
        hid: 'image',
        name: 'image',
        property: 'og:image',
        content: mainImage,
      },
    ],
    // favicons
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/images/favicons/apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/images/favicons/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/images/favicons/favicon-16x16.png',
      },
    ],
    ['link', { rel: 'manifest', href: '/images/favicons/site.webmanifest' }],
    ['link', { rel: 'shortcut icon', href: '/images/favicons/favicon.ico' }],
    // cannonical
    ['link', { rel: 'canonical', href: url }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Website',
        link: 'https://acornglobus.com',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            'onboarding-at-acorn-globus',
            'how-to-communicate-effectively',
            'prepare-your-machine-for-work',
            'top-skills-to-learn-to-excel',
            'talking-to-clients-and-customers',
            'oncall-roles-and-responsibilities',
            'the-git-flow',
            'writing-and-posting-blogs',
            'adding-schema-to-blogs',
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
};
