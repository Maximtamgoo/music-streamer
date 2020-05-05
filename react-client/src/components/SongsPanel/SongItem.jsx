import React from 'react'
import { MdPlayCircleOutline } from 'react-icons/md'

const SongItem = ({ name }) => {
  return (
    <div className="song-item">
      <MdPlayCircleOutline />
      <span>
        {name} - Artist - Album - Date Added - Duration
      </span>
    </div>
  )
}

export default SongItem