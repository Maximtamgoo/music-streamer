import React from 'react'
import './style/SongsPanel.css'
import Filter from './Filter'
import OrderBy from './OrderBy'
import SongList from './SongList'

const SongsPanel = () => {
  return (
    <div className="songs-panel">
      <Filter />
      <OrderBy />
      <SongList />
    </div>
  )
}

export default SongsPanel