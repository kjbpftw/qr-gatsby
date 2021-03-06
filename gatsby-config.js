module.exports = {
  siteMetadata: {
    title: `QuestRedemption`,
    description: `[non-commercial] [not-for-hire] [non-governmental]`,
    author: `@kjbpftw`,
    siteUrl: `https://questr.gatsbyjs.io`,
  },
  plugins: [
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`
      }
    },
    `gatsby-plugin-fastclick`,
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
        name: `QuestRedemption`,
        short_name: `QuestR`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
     `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-offline`,
     options: {
      workboxConfig: { importWorkboxFrom: `cdn`},
    
      
    }
    },
  ],
}
