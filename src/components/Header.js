import React from 'react'
import { connect, useSelector } from 'react-redux'

const Header = () => {
  const car = useSelector(state => {
    return state.car
  })

  return (
    <div className="tile is-parent">
      <div className="tile is-child notification is-dark is-bold">
        <figure className="">
          <img src={car.image} alt={car.name} />
        </figure>
        <h2 className="title">{car.name}</h2>
        <p className="subtitle">Amount: ${car.price}</p>
      </div>
    </div>
  )
}

export default Header
