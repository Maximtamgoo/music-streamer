import React from 'react'
import style from './style/UploadsList.module.css'
import { useSelector } from 'react-redux'
import UploadsItem from './UploadsItem'

const UploadsList = () => {
  const uploads = useSelector(state => state)
  return (
    <div className={style["uploads-list"]}>
      {Object.keys(uploads).map((e, i) => {
        const { name, loaded, total } = uploads[e]
        return (
          <UploadsItem key={i}
            name={name}
            loaded={loaded}
            total={total}
          />
        )
      })}
    </div>
  )
}

export default UploadsList