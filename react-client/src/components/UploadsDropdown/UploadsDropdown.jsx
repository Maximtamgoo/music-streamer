import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUploadItem } from '../../redux/SongListActions'
import { uploadSong } from '../../redux/asyncActions'
import { v4 as uuidv4 } from 'uuid'
import UDStyle from './style/UploadsDropdown.module.css'
import { MdArrowDropUp, MdArrowDropDown, MdCloudUpload, MdFileUpload } from 'react-icons/md'
import FileDrop from './FileDrop'
import UploadsList from './UploadsList'

const UploadsDropdown = () => {
  const dispatch = useDispatch()
  const [showList, setShowList] = useState(false)

  const getAcceptedFiles = async (songs) => {

    // songs.forEach(song => {
    //   const id = uuidv4()
    //   dispatch(addUploadItem({ id, filename: song.name }))
    // })

    for (const song of songs) {
      const id = uuidv4()
      try {
        const res = await dispatch(uploadSong(song, id))
        console.log('res.data:', res.data)
      } catch (error) {
        console.log('axios error:', error)
        // dispatch()
      }
    }

    // songs.map(async (song) => {
    //   console.log('song start:', song.name)
    //   const id = `upload-${uuidv4()}`
    //   const timestamp = Date.now()
    //   dispatch(addUploadItem({ id, filename: song.name, timestamp }))
    //   dispatch(uploadSong(song, id))
    //   // dispatch(setSongListSynced(false))
    //   // or
    //   // dispatch(addSongToSongList())
    //   console.log('song end:', song.name)
    // })
    // console.log('end of map loop')
  }

  // const [currentUploads, setCurrentUploads] = useState({})

  // const uploadSongs = async (songs) => {
  //   const promises = songs.map(async (song, index) => {
  //     try {
  //       const formData = new FormData()
  //       formData.append('song', song)
  //       return await axios.post('/api/upload/single', formData, {
  //         onUploadProgress: (progressEvent) => {
  //           const { loaded, total } = progressEvent
  //           const completed = (loaded === total) ? true : false
  //           setCurrentUploads((prevCurrentUploads) => ({ ...prevCurrentUploads, [index]: { name: song.name, completed, loaded, total } }))
  //         }
  //       })
  //     } catch (error) {
  //       return error
  //     }
  //   })
  //   const res = await Promise.all(promises)
  //   console.log('res:', res)
  //   // console.log('last uploadsArray:', uploadsArray)
  // }

  // useEffect(() => {
  //   console.log('currentUploads:', currentUploads)
  // }, [currentUploads])


  return (
    <div className={UDStyle.container}>
      <FileDrop getAcceptedFiles={getAcceptedFiles} />
      <button href="#uploads" className={UDStyle['icon-btn']} onClick={() => setShowList(!showList)}>
        {showList ? <MdFileUpload className={UDStyle.icon} /> :
          <MdCloudUpload className={UDStyle.icon} />}
      </button>

      {showList ? <UploadsList /> : null}
    </div>
  )
}

export default UploadsDropdown