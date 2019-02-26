import React from 'react'
import { render } from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers/index'
import ContainerApp from './containers/ContainerApp';

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <ContainerApp />
  </Provider>,
  document.getElementById('root')
)