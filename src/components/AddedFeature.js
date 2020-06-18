import React from 'react'
import { useDispatch } from 'react-redux'

const AddedFeature = props => {
  // useDispatch pulls in dispatch to have actions straight in the component
  // tradeoff is that actions are not organized in one file
  const dispatch = useDispatch()

  return (
    <div className="card">
      <div className="card-content">
        <span>{props.feature.name}</span>&nbsp;&nbsp;
        <button
          onClick={() =>
            dispatch({ type: 'REMOVE_FEATURE', payload: props.feature })
          }
          className="delete"
        >
          X
        </button>
      </div>
    </div>
  )
}

export default AddedFeature
