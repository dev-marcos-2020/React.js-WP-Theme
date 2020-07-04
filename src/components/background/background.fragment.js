/**
 * Example Component inline fragment.
 * See https://www.gatsbyjs.org/packages/gatsby-source-wordpress/#query-with-acf-flexible-content
 */

const backgroundComponentFragment = () => `
    background {
        angle
        opacity
        skew
        colors {
            color
            opacity
            position
        }
    }
`

module.exports = backgroundComponentFragment;