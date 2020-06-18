import React from 'react'
import { useSelector } from 'react-redux'

const Total = () => {
  // useSelector allows us to "select" data from state
  const car = useSelector(state => {
    return state.car
  })

  // useSelector takes the state and returns what we want from state
  const additionalPrice = useSelector(state => {
    return state.additionalPrice
  })

  return (
    <div className="columns">
      <h4 className="subtitle column is-offset-4">
        Total Amount: ${car.price + additionalPrice}
      </h4>
    </div>
  )
}

export default Total
