import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'

import store from './store'
import App from './App'

import './styles.scss'
import 'bulma/css/bulma.css'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
