import React from 'react'
import { connect } from 'react-redux'

const Header = (props) => {
  return (
    <div className='tile is-parent'>
      <div className='tile is-child notification is-dark is-bold'>
        <figure className=''>
          <img src={props.car.image} alt={props.car.name} />
        </figure>
        <h2 className='title'>{props.car.name}</h2>
        <p className='subtitle'>Amount: ${props.car.price}</p>
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
  {}
)(Header)
