module.exports = {
  title: "Power's Wiki",
  tagline: "still developing",
  url: "https://wiki-power.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://cos.ap-guangzhou.myqcloud.com/wiki-media-1253965369/doc/logo-white.svg",
  //organizationName: "linyuxuanlin", // Usually your GitHub org/user name.
  //projectName: "Wiki_Docusaurus", // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: "Power's Wiki",
      /*
      logo: {
        alt: "My Site Logo",
        src:
          "https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20201122195819.png",
      },
      */
      items: [{
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "blog",
          label: "Blog",
          position: "left",
        },
        {
          to: "digest/Producter",
          label: "Digest",
          position: "left",
        },
        {
          to: "docs/Collection",
          label: "收藏夹",
          position: "right",
        },
        {
          to: "docs/Links",
          label: "友情链接",
          position: "right",
        },
        {
          href: "https://github.com/linyuxuanlin/Wiki_Docusaurus",
          label: "本站源码",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      /*
      links: [{
          title: "Docs",
          items: [{
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          
                    title: "Community",
                    items: [

                      {
                        label: "Stack Overflow",
                        href: "https://stackoverflow.com/questions/tagged/docusaurus",
                      },
                      {
                        label: "Discord",
                        href: "https://discordapp.com/invite/docusaurus",
                      },
                      {
                        label: "Twitter",
                        href: "https://twitter.com/docusaurus",
                      },
                      
                    ],
        },
        {
          title: "More",
          items: [{
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],*/
      copyright: `Power Lin © ${new Date().getFullYear()} | <a href="https://beian.miit.gov.cn"> 粤 ICP 备 20014898 号 </a> | Built with Docusaurus`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",

      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),

          // Please change this to your repo.
          //editUrl: "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        digest: {
          sidebarPath: require.resolve("./sidebars_digest.js"),

          // Please change this to your repo.
          //editUrl: "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          //editUrl: "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};