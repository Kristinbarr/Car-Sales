import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'
import App from './App'
import { reducer } from './reducers'

import './styles.scss'
import 'bulma/css/bulma.css'

export const store = createStore(reducer)

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
