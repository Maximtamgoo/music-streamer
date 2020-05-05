import React, { useState } from 'react'
import './style/UploadsDropdown.css'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import FileDrop from './FileDrop'
import UploadsList from './UploadsList'

const UploadsDropdown = () => {
  const [showList, setShowList] = useState(false)

  return (
    <div className="uploads-dropdown">
      <div className="dropdown-top">
        <FileDrop />
        <button className="icon-btn icon-btn-drop" onClick={() => setShowList(!showList)}>
          {showList ? <MdKeyboardArrowDown className="icon" /> : <MdKeyboardArrowUp className="icon" />}
        </button>
      </div>
      {showList ? <UploadsList /> : null}
    </div>
  )
}

export default UploadsDropdown