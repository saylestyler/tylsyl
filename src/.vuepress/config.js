const currentDateUTC = new Date().toUTCString();

module.exports = {
  title: "~\\Tyler Sayles\\Public\\server\\dev\\dump",
  dest: "./public",
  themeConfig: {
    docsDir: "src",
    pageSize: 300, // #TODO: figure this out
    startPage: 0
  },
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-93902103-1"
      }
    ],
    "vuepress-plugin-janitor",
    [
      "vuepress-plugin-seo",
      {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: (_, $site) => $site.themeConfig.author,
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => "summary_large_image",
        type: $page =>
          ["articles", "posts", "blog"].some(folder =>
            $page.regularPath.startsWith("/" + folder)
          )
            ? "article"
            : "website",
        url: (_, $site, path) => ($site.themeConfig.domain || "") + path,
        image: ($page, $site) =>
          $page.frontmatter.image &&
          ($site.themeConfig.domain || "") + $page.frontmatter.image,
        publishedAt: $page =>
          $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated)
      }
    ]
  ],
  head: [
    [
      "link",
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-icon.png" }
    ],
    ["link", { rel: "icon", sizes: "32x32", href: "/favicon-32x32.png" }],
    ["link", { rel: "icon", sizes: "16x16", href: "/favicon-16x16.png" }],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    [
      "link",
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#da532c" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
    [
      "meta",
      { name: "description", content: "tyler sayles software development blog" }
    ]
  ],
  plugins: [
    "@vuepress/pwa",
    {
      serviceWorker: true,
      updatePopup: true
    }
  ]
};
