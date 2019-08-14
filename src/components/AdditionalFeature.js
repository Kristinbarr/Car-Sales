import React from 'react'
import { connect } from 'react-redux'

import { addFeature } from '../actions'

const AdditionalFeature = (props) => {

  return (
    <li>
      <button
        onClick={() => {
          props.addFeature(props.feature)
        }}
        className='button'
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  )
}

const mapStateToProps = (state) => {
  return {
    store: state.store,
    car: state.car
  }
}

export default connect(
  mapStateToProps,
  { addFeature }
)(AdditionalFeature)
