/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import './style/SongList.css'
import { useSelector, useDispatch } from 'react-redux'
import { getSongsData } from '../../redux/songListActions'
import SongItem from './SongItem'
import UploadsItem from './UploadsItem'

const SongList = () => {
  const songListState = useSelector(state => state.songListReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('useEffect')
    dispatch(getSongsData({ lastItemDate: 'start' }))
  }, [dispatch])

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
      {songListState.map((song) => {
        const {_id, title } = song
        return <SongItem key={_id} title={title} />
      })}
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