module.exports = {
  siteMetadata: {
    title: `Cryptocracy`,
    description: `An online cryptic hunt conducted by students of D.P.S. Dwarka and D.P.S. R.K. Puram. Join our official Discord server.`,
    author: `@someshkar`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
   // `gatsby-plugin-offline`,
  ],
}
