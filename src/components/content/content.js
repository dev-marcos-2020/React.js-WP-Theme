import React from 'react';

import FluidImage from '../../../theme/src/components/fluidImage/fluidImage';

const ContentComponent = (props) => {
  const { icon, title, description } = props;

  return (
    <div className="content">
        <FluidImage className="icon" {...icon.image} />
        <div><p className="title">{title.title}</p></div>
        <div><p className="description" dangerouslySetInnerHTML={{ __html: description.text }} /></div>
    </div>
  )
}

ContentComponent.propTypes = {
}

export default ContentComponent;