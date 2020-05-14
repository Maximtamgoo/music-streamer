import React from 'react'

const UploadsItem = ({ name, loaded, total }) => {

  const percent = (!loaded || !total) ? 0 : Math.floor((loaded / total) * 100)

  return (
    <div className="uploads-item">
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