import React from 'react'
import SongItem from './SongItem'
import '../../style/SongList.css'

const SongList = () => {

  const items = Array(10).fill({ name: 'song 1' })

  // const items = [
  //   { name: 'song 1' },
  //   { name: 'song 2' },
  //   { name: 'song 3' }
  // ]

  return (
    <ul className={'song-list'}>
      {items.map((e, i) => <SongItem key={i} name={e.name} />)}
    </ul>
  )
}

export default SongList