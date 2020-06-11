import React from 'react'
import { MdPlayCircleOutline } from 'react-icons/md'

const SongItem = ({ _id, title }) => {


  return (
    <div className="song-item">
      <MdPlayCircleOutline />
      <span>
        {/* {name} - Artist - Album - Date Added - Duration */}
        {title}
      </span>
    </div>
  )
}

export default SongItem