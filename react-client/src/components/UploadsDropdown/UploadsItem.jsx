import React from 'react'
import style from './style/UploadsList.module.css'

const UploadsItem = ({ name, loaded, total }) => {

  const percent = (!loaded || !total) ? 0 : Math.floor((loaded / total) * 100)

  return (
    <div className={style["uploads-item"]}>
      <div>
        {name}
      </div>
      <div>
        progress bar - {percent}%
        </div>
    </div>
  )
}

export default UploadsItem