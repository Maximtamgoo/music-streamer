import React from 'react'
import { FiPlayCircle } from 'react-icons/fi'

const SongItem = ({ name }) => {
  return (
    <li className="song-item">
      <div href="#">
        <FiPlayCircle />
      </div>
      SongItem - {name}
    </li>
  )
}

export default SongItem