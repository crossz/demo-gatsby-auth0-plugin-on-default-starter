require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
    // path: `.env.development`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
        resolve: "gatsby-theme-auth0-ts",
        options: {
          /*
          Required: for more information on these values
          see https://auth0.com/docs/libraries/auth0js/v9#initialization
          */
          auth0Domain: process.env.AUTH0_DOMAIN,
          auth0ClientID: process.env.AUTH0_CLIENTID,
          auth0RedirectUri: process.env.AUTH0_CALLBACK,
  
          /* Optional */
          // auth0Audience: undefined,
          // auth0ResponseType: "token id_token",
          // auth0Scope: "openid profile",
        },
      },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
