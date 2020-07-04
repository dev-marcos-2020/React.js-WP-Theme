import React from 'react';

import FeatureComponent from '../../components/feature/feature';
import '../../../static/style/index.css';

const Feature = (props) => {
  return (
    <FeatureComponent props={props} />
  )
}

Feature.propTypes = {
}

export default Feature;