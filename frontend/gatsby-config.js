// gatsby-config.js

const isProd = process.env.NODE_ENV === 'production';

if (isProd !== 'production') {
  require('dotenv').config();
}

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
    title: `Humam Bahoo`,
    siteUrl: `https://www.humambahoo.com`,
    description: `A personal portfolio website for Humam Bahoo`,
    contactEmail: `humam.bahoo@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `uf6l82c6`,
        dataset: `production`,
        token: process.env.SANITY_TOKEN,
        graphqlTag: `default`,
        overlayDrafts: !isProd || true, // TODO: test if drafts is shown in dev mode only
      },
    },
    // TODO: add and setup gatsby-plugin-manifest
    // ... other plugins
  ],
};
