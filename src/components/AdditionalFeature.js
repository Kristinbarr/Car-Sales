import React from 'react'
import { useDispatch } from 'react-redux'

const AdditionalFeature = props => {
  // useDispatch pulls in dispatch to have actions straight in the component
  // tradeoff is that actions are not organized in one file
  const dispatch = useDispatch()

  return (
    <div className="card">
      <div className="card-content">
        <span>
          {props.feature.name} (${props.feature.price})
        </span>
        &nbsp;&nbsp;
        <button
          onClick={() => dispatch({ type: 'ADD-FEATURE', payload: props.feature })}
          className="button is-warning is-offset-6"
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default AdditionalFeature
