module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Software Developer - Educator`,
    description: `Add you meta Description here!`,
    url: "https://github.com/rjiang98/v2/",
    author: `Richard Jiang`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-favicon`,
    //   options: {
    //     logo: "./src/favicon.png",
    //
    //     appName: null, // Inferred with your package.json
    //     appDescription: null,
    //     developerName: null,
    //     developerURL: null,
    //     dir: "auto",
    //     lang: "en-US",
    //     background: "#fff",
    //     theme_color: "#fff",
    //     display: "standalone",
    //     orientation: "any",
    //     start_url: "/?homescreen=1",
    //     version: "1.0",
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-143776005-1",
      },
    },
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
        name: `gatsby-clean-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // 'gatsby-plugin-offline',
  ],
}
