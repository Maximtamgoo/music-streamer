import React from 'react'
import './App.css'
import NavBar from './NavBar/NavBar'
import UploadsDropdown from './UploadsDropdown/UploadsDropdown'
import AccountDropdown from './AccountDropdown/AccountDropdown'
import SongsPanel from './SongsPanel/SongsPanel'
import Player from './Player/Player'

const App = () => {
  return (
    <div className="App">
      <div className="side-bar">
        side-bar
      </div>
      <NavBar>
        <UploadsDropdown />
        <AccountDropdown />
      </NavBar>
      <SongsPanel />
      <Player />
    </div>
  )
}

export default App