import React from 'react'
import { MdPlayCircleOutline } from 'react-icons/md'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { getSongStream } from '../../redux/songListActions'

const SongItem = ({ id, title, artists, album, uploadDate, duration, track, length }) => {
  const dispatch = useDispatch()

  const dateAdded = moment(uploadDate).format('YYYY-MM-D')
  let seconds = moment.duration(duration, 'seconds').seconds()
  let minutes = moment.duration(duration, 'seconds').minutes()
  let hours = moment.duration(duration, 'seconds').hours()

  let formattedDuration = (hours === 0) ? '' : `${hours}:`
  formattedDuration += (minutes < 10) ? `0${minutes}:` : `${minutes}:`
  formattedDuration += (seconds < 10) ? `0${seconds}` : `${seconds}`

  const playSong = (id, length) => {
    
    dispatch(getSongStream(id))
  }

  return (
    <div className="song-item" onClick={() => playSong(id, length)}>
      <MdPlayCircleOutline />
      <span>
        {track.no} - {title} - {dateAdded} - {formattedDuration}
        {/* {title} - {artists} - {album} - {dateAdded} - {formattedDuration} */}
      </span>
    </div>
  )
}

export default SongItem