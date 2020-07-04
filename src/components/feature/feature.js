import React from 'react';
import BackgroundComponent from '../background/background';
import ContentComponent from '../content/content';
import IllustrationComponent from '../illustration/illustration';

const FeatureComponent = (props) => {
  const { background, illustration, icon, title, description, alignment } = props.props;
  return (
    <div className="section">
      <BackgroundComponent background={background} />
      <div className={"main-body " + (alignment === "left" ? "flex-row-reverse" : "flex-row")}>
        <ContentComponent icon={icon} title={title} alignment={alignment} description={description} />
        <div className="divider"></div>
        <IllustrationComponent alignment={alignment} illustration={illustration} />
        <div className="clear"></div>
      </div>
    </div>
  )
}

FeatureComponent.propTypes = {
}

export default FeatureComponent;