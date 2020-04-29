import React from 'react'
import { connect } from 'react-redux'

import { removeAddedFeature } from '../actions'

const AddedFeature = (props) => {
  return (
    <div className='card'>
      <div className='card-content'>
        <span>{props.feature.name}</span>&nbsp;&nbsp;
        <button
          onClick={() => props.removeAddedFeature(props.feature)}
          className='delete'
        >
          X
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    car: state.car
  }
}

export default connect(
  mapStateToProps,
  { removeAddedFeature }
)(AddedFeature)
