import React from 'react'
import '../style/App.css'
import SongList from './Library/SongList'
// import MusicUploader from './Library/SongUploader'
import Player from './Player/Player'
import FileDrop from './FileDrop'

const App = () => {

  return (
    <div className="App">
      <SongList />
      {/* <MusicUploader /> */}
      <Player />
      <FileDrop />
    </div>
  )
}

export default App