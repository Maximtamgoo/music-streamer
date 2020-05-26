import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import uploadsReducer from './redux/uploadsReducer'
import { addUploadItem } from './redux/uploadsActions'

import 'typeface-roboto'
// import 'normalize.css'
import './index.css'
import App from './components/App'

const store = createStore(uploadsReducer, applyMiddleware(ReduxThunk))

// store.subscribe(() => {
//   const state = store.getState()
//   console.log('subscriber:',state)
// })
store.dispatch(addUploadItem({ id: 2, name: 'song.mp3' }))
store.dispatch(addUploadItem({ id: 4, name: 'another song.mp3' }))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)