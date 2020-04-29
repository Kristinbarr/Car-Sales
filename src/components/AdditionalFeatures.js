import React from 'react'
import AdditionalFeature from './AdditionalFeature'
import { connect } from 'react-redux'

const AdditionalFeatures = (props) => {
  console.log('add featureS', props)
  return (
    <div className='tile is-parent'>
      <div className='section tile is-child'>
        <h4 className='title'>Additional Features</h4>
        {props.store.length ? (
          <ol type='1'>
            {props.store.map((item) => (
              <AdditionalFeature key={item.id} feature={item} />
            ))}
          </ol>
        ) : (
          <p className='subtitle'>Nice looking car!</p>
        )}
      </div>
    </div>
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
  {}
)(AdditionalFeatures)
