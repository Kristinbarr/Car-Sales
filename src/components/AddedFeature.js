import React from 'react';
import { connect } from 'react-redux'

import { removeAddedFeature } from '../actions'

const AddedFeature = props => {
  return (
    <li>
      <button onClick={()=> props.removeAddedFeature(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car
  }
}

export default connect(
  mapStateToProps,
  { removeAddedFeature }
)(AddedFeature)
