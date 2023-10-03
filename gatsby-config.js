/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {

  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
  {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/content/`,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Your Site Name`,
      short_name: `SiteName`,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#000000`,
      display: `standalone`,
      icon: `src/images/favicon.png`,  // This path is relative to the root of the site.
      // This will auto-generate various sizes of favicons.
      // Optionally, you can set sizes manually if you want to.
      // sizes: `192x192 512x512`,
    },
  },
  {
    resolve: "gatsby-transformer-remark",
    options: {
      excerpt_separator: `<!-- end -->`,
      plugins: [
        {
          resolve: "gatsby-remark-katex",
          options: {
            strict: "ignore"
          }
        },
      ]
    }
  },
  ]


}
