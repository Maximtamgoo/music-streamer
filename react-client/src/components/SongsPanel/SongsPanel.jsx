import React from 'react'
import './style/SongsPanel.css'
import Filter from './Filter'
import SortBy from './SortBy'
import SongList from './SongList'

const SongsPanel = () => {
  return (
    <div className="songs-panel">
      <Filter />
      <SortBy />
      <SongList />
    </div>
  )
}

export default SongsPanel