import React from 'react'
import './App.css'
import SongsPanel from './SongsPanel/SongsPanel'
import Player from './Player/Player'

const App = () => {
  return (
    <div className="App">
      <div class="side-bar">
        side-bar
      </div>
      <div class="header">
        header
        {/* <UploadsDropdown /> */}
        {/* <AccountDropdown /> */}
      </div>
      <SongsPanel />
      <Player />
    </div>
  )
}

export default App