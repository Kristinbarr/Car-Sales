import React, { useState } from 'react'

import Header from './components/Header'
import AddedFeatures from './components/AddedFeatures'
import AdditionalFeatures from './components/AdditionalFeatures'
import Total from './components/Total'

const App = () => {
  return (
    <div className='section boxes columns'>
      <div className='is-three-fifths column'>
        <Header />
        <AddedFeatures />
      </div>
      <div className='box is-two-fifths column'>
        <AdditionalFeatures />
        <Total />
      </div>
    </div>
  )
}

export default App
