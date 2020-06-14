import { addSongDataToHead } from './songListActions'
import axios from 'axios'
// import { v4 as uuidv4 } from 'uuid'

export const uploadSong = (song) => {
  return async (dispatch) => {
    // const id = uuidv4()
    const formData = new FormData()
    formData.append('song', song)
    // formData.append('auth', JSON.stringify(auth))
    try {
      const res = await axios.post('/api/upload/song', formData, {
        onUploadProgress: (progressEvent) => {
          // console.log('progressEvent:', progressEvent)
          // const { loaded, total } = progressEvent
          // dispatch(updateProgress(id, loaded, total))
        }
      })
      dispatch(addSongDataToHead(res.data.songData))
      console.log('res.data:', res.data)
    } catch (error) {
      console.log('axios error:', error)
      // dispatch()
    }
  }
}

export const addUploadItem = ({ id, filename, timestamp }) => ({
  type: 'ADD_UPLOAD_ITEM',
  id, filename, loaded: null, total: null, timestamp
})

export const updateProgress = (id, loaded, total) => ({
  type: 'UPDATE_PROGRESS',
  id, loaded, total
})

export const removeUploadItem = () => ({
  type: 'REMOVE_UPLOAD_ITEM'
})