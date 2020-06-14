import React from 'react'
import { MdPlayCircleOutline } from 'react-icons/md'
import moment from 'moment'

const SongItem = ({ id, title, artists, album, uploadDate, duration, track }) => {

  const dateAdded = moment(uploadDate).format('YYYY-MM-D')
  let seconds = moment.duration(duration, 'seconds').seconds()
  let minutes = moment.duration(duration, 'seconds').minutes()
  let hours = moment.duration(duration, 'seconds').hours()
  
  let formattedDuration = (hours === 0) ? '' : `${hours}:`
  formattedDuration += (minutes < 10) ? `0${minutes}:` : `${minutes}:`
  formattedDuration += (seconds < 10) ? `0${seconds}` : `${seconds}`

  return (
    <div className="song-item" id={id} onClick={(e) => console.log('e:', e.currentTarget)}>
      <MdPlayCircleOutline />
      <span>
        {track.no} - {title} - {dateAdded} - {formattedDuration}
        {/* {title} - {artists} - {album} - {dateAdded} - {formattedDuration} */}
      </span>
    </div>
  )
}

export default SongItem