import React from 'react'
import { connect } from 'react-redux'

import AddedFeature from './AddedFeature'

const AddedFeatures = (props) => {
  return (
    <div className='section message is-primary'>
      <h6 className='message-header'>Added features:</h6>
      {props.car.features.length ? (
        <ol type='1'>
          {props.car.features.map((item) => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p className='message-body'>You can purchase items from the store.</p>
      )}
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
  {}
)(AddedFeatures)
