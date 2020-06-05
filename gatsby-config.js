module.exports = {
  siteMetadata: {
    title: `Cryptocracy`,
    description: `An online cryptic hunt conducted by a group of high-school students from the Delhi Tech Circuit. Join our official Discord server.`,
    author: `@cryptocracy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cryptocracy`,
        short_name: `Cryptocracy`,
        start_url: `/`,
        background_color: `#2977f5`,
        theme_color: `#2977f5`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-168595780-1`,
        head: true,
        defer: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
