import React from 'react'
import './style/MainPage.css'
import NavBar from '../NavBar/NavBar'
import UploadsDropdown from '../UploadsDropdown/UploadsDropdown'
import AccountDropdown from '../AccountDropdown/AccountDropdown'
import SongsPanel from '../SongsPanel/SongsPanel'
import Player from '../Player/Player'

const MainPage = () => {
  return (
    <div className="main-page">
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

export default MainPage