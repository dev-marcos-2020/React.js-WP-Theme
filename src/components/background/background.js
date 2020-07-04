import React from 'react';

const BackgroundComponent = (props) => {
  const { background } = props;
  
  const bgStyle = {
    opacity: background.opacity / 100,
    transform: `skew(0,${background.skew}deg)`
  }

  if(background.colors != null) {
    bgStyle.background = `linear-gradient(${background.angle}deg`;
    background.colors.forEach(color => {
      let strOpacity = Math.floor(color.opacity / 100 * 255).toString(16);

      if(strOpacity.length === 1) strOpacity = '0' + strOpacity;
      
      bgStyle.background += `, ${color.color + strOpacity} ${color.position}%`;
    });
    bgStyle.background += ')';
  }

  return (
    <div className="background" style={bgStyle}></div>
  )
}

BackgroundComponent.propTypes = {
}

export default BackgroundComponent;