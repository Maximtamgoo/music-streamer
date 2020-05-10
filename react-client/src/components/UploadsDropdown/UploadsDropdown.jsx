import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './style/UploadsDropdown.css'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import FileDrop from './FileDrop'
import UploadsList from './UploadsList'

const UploadsDropdown = () => {
  const [showList, setShowList] = useState(false)
  const [currentUploads, setCurrentUploads] = useState({})
  // const [test, setTest] = useState({})

  const uploadSongs = async (songs) => {
    const promises = songs.map(async (song, index) => {
      try {
        const formData = new FormData()
        formData.append('song', song)
        return await axios.post('/api/upload/single', formData, {
          onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent
            const completed = (loaded === total) ? true : false
            setCurrentUploads((prevCurrentUploads) => ({ ...prevCurrentUploads, [index]: { name: song.name, completed, loaded, total } }))
          }
        })
      } catch (error) {
        return error
      }
    })
    const res = await Promise.all(promises)
    console.log('res:', res)
    // console.log('last uploadsArray:', uploadsArray)
  }

  useEffect(() => {
    console.log('currentUploads:', currentUploads)
  }, [currentUploads])


  return (
    <div className="uploads-dropdown">
      <div className="dropdown-top">
        <FileDrop uploadSongs={uploadSongs} />
        <button className="icon-btn icon-btn-drop" onClick={() => setShowList(!showList)}>
          {showList ? <MdKeyboardArrowDown className="icon" /> :
            <MdKeyboardArrowUp className="icon" />}
        </button>
      </div>
      {showList ? <UploadsList currentUploads={currentUploads} /> : null}
    </div>
  )
}

export default UploadsDropdown