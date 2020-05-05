import React from 'react'
import Controls from './Controls'
import './style/Player.css'

const Player = () => {

  let title = 'Song Title'

  return (
    <div className="player">
      <div className="song-title">{title}</div>
      <Controls />
    </div>
  )
}

export default Player