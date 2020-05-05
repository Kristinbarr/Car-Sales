import React from 'react'
import { useSelector } from 'react-redux'

import AddedFeature from './AddedFeature'

const AddedFeatures = () => {
  
  const features = useSelector(state => {
    return state.car.features
  })

  return (
    <div className="section message is-primary">
      <h6 className="message-header">Added features:</h6>
      {features.length ? (
        <ol type="1">
          {features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p className="message-body">You can purchase items from the store.</p>
      )}
    </div>
  )
}

export default AddedFeatures
