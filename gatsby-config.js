module.exports = {
  siteMetadata: {
    title: `Gaming`,
    description: `Itana GmbH`,
    author: `Jörg Weißleder`,
    siteUrl: `https://gaming.itana.de`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-K56QMGF",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" }
      }
    },
    "gatsby-plugin-remove-console",
    `gatsby-plugin-arengu-forms`,
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        https: true,
        www: false,
        DisallowSymLinks: true,
        SymLinksIfOwnerMatch: true
      }
    },
    `gatsby-plugin-sitemap`,

    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://gaming.itana.de",
        sitemap: "https://gaming.itana.de/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }]
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gaming.itana.de`,
        short_name: `gaming.itana.de`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#43ac45`,
        display: `standalone`,
        include_favicon: true,
        icon: `src/images/gaming/gaming.svg`,
        icons: [
          {
            src: `icon-192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `icon-512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ],
        icon_options: {
          // For all the options available, please see:
          // https://developer.mozilla.org/en-US/docs/Web/Manifest
          // https://w3c.github.io/manifest/#purpose-member
          purpose: `maskable`
        },
        cache_busting_mode: `name`,
        legacy: `false`,
        theme_color_in_head: true
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    `gatsby-plugin-offline`
  ]
};
