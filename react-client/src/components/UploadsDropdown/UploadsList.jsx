import React from 'react'
import './style/UploadsList.css'
import UploadsItem from './UploadsItem'

const UploadsList = ({ currentUploads }) => {

  return (
    <div className="uploads-list">
      {Object.keys(currentUploads).map((e, i) => {
        // const info = { name: e.name }
        return (
          <UploadsItem key={i} name={currentUploads[e].name} completed={currentUploads[e].completed}/>
        )
      })}
    </div>
  )
}

export default UploadsList