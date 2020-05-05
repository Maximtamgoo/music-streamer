import React from 'react'
import './style/SongList.css'
import SongItem from './SongItem'

const SongList = () => {

  const items = Array(50).fill({ name: 'Song Title' })

  return (
    <div className="song-list">
      {items.map((e, i) => <SongItem key={i} name={e.name} />)}
    </div>
  )
}

export default SongList