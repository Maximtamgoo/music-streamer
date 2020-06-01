import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { uploadSong, addUploadItem } from '../../redux/uploadsActions'
// import { v1 as uuidv1 } from 'uuid'
import UDStyle from './style/UploadsDropdown.module.css'
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md'
import FileDrop from './FileDrop'
import UploadsList from './UploadsList'

const UploadsDropdown = () => {
  const dispatch = useDispatch()
  const [showList, setShowList] = useState(false)

  const getAcceptedFiles = async (songs) => {

    // for (const song of songs) {
    //   const id = song.name.split('.')[0]
    //   dispatch(addUploadItem({ id, name: song.name }))
    //   const res = await dispatch(uploadSong(song, id))
    //   console.log('res:', res)
    // }

    songs.map(async (song) => {
      try {
        console.log('song start:', song.name)
        // const id = uuidv1()
        const id = song.name.split('.')[0]
        dispatch(addUploadItem({ id, name: song.name }))
        const res = await dispatch(uploadSong(song, id))
        console.log('res:', res)
        // dispatch(setSongListSynced(false))
        // or
        // dispatch(addSongToSongList())
      } catch (error) {
        console.log('error:', error)
        // dispatch()
      }
      console.log('song end:', song.name)
    })
    console.log('end of map loop')
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
        {showList ? <MdArrowDropUp className={UDStyle.icon} /> :
          <MdArrowDropDown className={UDStyle.icon} />}
      </button>

      {showList ? <UploadsList /> : null}
    </div>
  )
}

export default UploadsDropdown