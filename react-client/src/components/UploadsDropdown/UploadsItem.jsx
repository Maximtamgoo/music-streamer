import React from 'react'

const UploadsItem = ({ name, completed }) => {
  return (
    <div className="uploads-item">
      <div>
        {name}
      </div>
      <div>
        progress bar - completed: {String(completed)}
      </div>
    </div>
  )
}

export default UploadsItem