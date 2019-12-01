const currentDateUTC = new Date().toUTCString();

module.exports = {
  title: '~\\Tyler Sayles\\Public\\server\\dev\\dump',
  dest: './public',
  // kvps here are available in root readmes
  // $site.themeConfig.myKey
  themeConfig: {
    docsDir: 'src',
    pageSize: 300, // #TODO: figure this out
    startPage: 0
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-93902103-1'
      }
    ],
    'vuepress-plugin-janitor'
  ],
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon.png' }],
    ['link', { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'description', content: 'tyler sayles software development blog' }]
  ]
};
