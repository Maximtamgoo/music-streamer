import React from 'react'
import { MdPlayCircleOutline } from 'react-icons/md'

const SongItem = ({ id, title, artists, album, uploadDate, duration, track }) => {

  return (
    <div className="song-item" id={id} onClick={(e) => console.log('e:', e.currentTarget)}>
      <MdPlayCircleOutline />
      <span>
      {track.no} - {title}
        {/* {title} - {artists} - {album} - {uploadDate} - {duration} */}
      </span>
    </div>
  )
}

export default SongItem