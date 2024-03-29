const userConfig = require('./config');

module.exports = {
  pathPrefix: `/AffiliateOnlineMarketing`,
  siteMetadata: {
    title: userConfig.title,
    author: userConfig.author,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin: 15px -30px !important'
            },
          },
          {
            resolve: `gatsby-source-youtube`,
            options: {
              channelId: 'UCoRYrVmWjNJ0WpbBFXMgtig',
              apiKey: 'AIzaSyBgFTYt7t259qS8JriFBrEjPWVCpqNfkag',
              maxVideos: 50 // Defaults to 50
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: TRACKING ID HERE,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
