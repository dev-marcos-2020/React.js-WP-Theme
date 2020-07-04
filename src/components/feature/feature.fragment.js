/**
 * Example Component inline fragment.
 * See https://www.gatsbyjs.org/packages/gatsby-source-wordpress/#query-with-acf-flexible-content
 */

const backgroundComponentFragment = require('../background/background.fragment');
const contentComponentFragment = require('../content/content.fragment');
const illustrationComponent = require('../illustration/illustration.fragment');

const featureComponentFragment = () => `
    alignment
    ${backgroundComponentFragment()}
    ${contentComponentFragment()}
    ${illustrationComponent()}
`

module.exports = featureComponentFragment;