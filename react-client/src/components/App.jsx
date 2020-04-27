import React from 'react'
import '../style/App.css'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'
import Filter from './SongList/Filter'
import SongList from './SongList/SongList'
import Player from './Player/Player'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="middle">
        <SideBar />
        <div className="main-content">
          <Filter />
          <SongList />
        </div>
      </div>
      <Player />
    </div>
  )
}

export default App