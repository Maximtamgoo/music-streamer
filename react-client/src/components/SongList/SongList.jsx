import React from 'react'
import SongItem from './SongItem'
import '../../style/SongList.css'

const SongList = () => {

  const items = Array(50).fill({ name: 'song 1' })

  return (
    <div className="song-list">
      {items.map((e, i) => <SongItem key={i} name={e.name} />)}
    </div>
  )
}

export default SongList