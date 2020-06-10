import React from 'react'
import './style/SongList.css'
import { useSelector } from 'react-redux'
import SongItem from './SongItem'
import UploadsItem from './UploadsItem'

const SongList = () => {
  const state = useSelector(state => state)

  // const items = Array(50).fill({ name: 'Song Title' })

  // const uploadsArray = [], SongsArray = []

  // Object.values(state).forEach(() => {
  //   if ()
  // })

  // const filter = Object.values(state).sort(function (a, b) {
  //   return b.timestamp - a.timestamp
  // })

  return (
    <div className="song-list">
      {/* {filter.map((item, i) => {
        const id = item.id
        const { filename, loaded, total } = state[id]
        return (id.startsWith('upload-')) ? <UploadsItem key={id} name={filename} loaded={loaded} total={total} /> :
          <SongItem key={id} name={filename} />
      }
      )} */}
    </div>
  )
}

export default SongList