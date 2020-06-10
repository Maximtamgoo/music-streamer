import React from 'react'
// import style from './style/UploadsList.module.css'

const UploadsItem = ({ name, loaded, total }) => {

  const percent = Math.floor((loaded / total) * 100)

  return (
    <div className="song-item">
      <span>
        {name} - progress bar - {percent}%
      </span>
    </div>
  )
}

export default UploadsItem