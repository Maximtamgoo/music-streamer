import React from 'react'
import './App.css'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'
import SongsPanel from './SongsPanel/SongsPanel'
import Player from './Player/Player'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="middle">
        <SideBar />
        <SongsPanel />
      </div>
      <Player />
    </div>
  )
}

export default App