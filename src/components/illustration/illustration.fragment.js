const fluidImageFragment = require('../../../theme/src/components/fluidImage/fluidImage.fragment');

const illustrationComponentFragment = () => `
    illustration {
        ${fluidImageFragment()}
    }
`

module.exports = illustrationComponentFragment;    