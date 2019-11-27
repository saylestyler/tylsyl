const currentDateUTC = new Date().toUTCString();

module.exports = {
  title: 'Index of \\Tyler\\Public\\server\\blog',
  dest: './public',
  // kvps here are available in root readmes
  // $site.themeConfig.myKey
  themeConfig: {
    // nav: [{ text: 'About', link: '/about' }, { text: 'Blog', link: '/blog/' }, { text: 'Archive', link: '/archive/' }],
    nav: [{ text: 'About', link: '/about' }, { text: 'Blog', link: '/' }],
    // navbar: false,
    // #TODO: find that lil gif of the splotch
    // logo: '/vuepress-blog-logo.png',
    docsDir: 'src',
    // #TODO: figure this out
    pageSize: 300,
    startPage: 0
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: '' // UA-00000000-0
      }
    ],
    // here's where ye PLUGINS go
    // 'vuepress-plugin-reading-time',
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
