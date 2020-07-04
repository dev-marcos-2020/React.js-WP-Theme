const featureComponentFragment = require('../../components/feature/feature.fragment');

/**
 * Hero Section inline fragment.
 * See https://www.gatsbyjs.org/packages/gatsby-source-wordpress/#query-with-acf-flexible-content
 */
module.exports = `
  ... on WordPressAcf_feature {
    ${featureComponentFragment()}
  }
` 