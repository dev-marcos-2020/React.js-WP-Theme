const fluidImageFragment = require('../../../theme/src/components/fluidImage/fluidImage.fragment');

const contentComponentFragment = () => `
    icon {
        ${fluidImageFragment()}
    }
    title {
        title
    }
    description {
        text
    }
`

module.exports = contentComponentFragment;    