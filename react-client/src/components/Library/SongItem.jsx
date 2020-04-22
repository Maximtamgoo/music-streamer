import React from 'react'
// import { FiPlayCircle } from 'react-icons/fi'

const SongItem = ({ name }) => {
  // const controlSize = '30px'

  return (
    <li className="song-item">
      <div href="#">
        {/* <FiPlayCircle size={controlSize} /> */}
      </div>
      SongItem - {name}
    </li>
  )
}

export default SongItem