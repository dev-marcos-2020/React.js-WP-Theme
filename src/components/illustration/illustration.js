import React from 'react';

import FluidImage from '../../../theme/src/components/fluidImage/fluidImage';

const IllustrationComponent = (props) => {
  const { alignment, illustration } = props;

  return (
    <div className={"illustration " + (alignment !== "left" ? "pullRight" : "pullLeft")}>
        <FluidImage {...illustration.image} />
    </div>
  )
}

IllustrationComponent.propTypes = {
}

export default IllustrationComponent;