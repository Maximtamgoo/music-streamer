import React from 'react'
import './style/UploadsList.css'
import UploadsItem from './UploadsItem'

const UploadsList = () => {

  const items = Array(10).fill({ name: 'Uploads Item' })

  return (
    <div className="uploads-list">
      {items.map((e, i) => <UploadsItem key={i} name={e.name} />)}
    </div>
  )
}

export default UploadsList