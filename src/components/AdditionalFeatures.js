import React from 'react'
import { useSelector } from 'react-redux'
import AdditionalFeature from './AdditionalFeature'

const AdditionalFeatures = () => {

  const additionalFeatures = useSelector(state => {
    return state.additionalFeatures
  })
  
  return (
    <div className="tile is-parent">
      <div className="section tile is-child">
        <h4 className="title">Additional Features</h4>
        {additionalFeatures ? (
          <ol type="1">
            {additionalFeatures.map(item => (
              <AdditionalFeature key={item.id} feature={item} />
            ))}
          </ol>
        ) : (
          <p className="subtitle">Nice looking car!</p>
        )}
      </div>
    </div>
  )
}

export default AdditionalFeatures
