import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import SongListReducer from './redux/SongListReducer'
import UploadsReducer from './redux/uploadsReducer'
import { addUploadItem } from './redux/uploadsActions'

import 'typeface-roboto'
// import 'normalize.css'
import './index.css'
import App from './components/App'

const store = createStore(
  combineReducers({ SongListReducer, UploadsReducer }),
  applyMiddleware(ReduxThunk)
)

store.subscribe(() => {
  console.log('subscriber start')
  const state = store.getState()
  console.log('sub:', state)
  // Object.keys(state).map((e) => {
  //   console.log(`sub: ${e}, ${state[e].name}`)
  // })
})
store.dispatch(addUploadItem({ id: '12345', filename: 'song.mp3' }))
// store.dispatch(addUploadItem({ tempID: 1, name: 'another song.mp3' }))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)