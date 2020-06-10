import axios from 'axios'
// import { v4 as uuidv4 } from 'uuid'
import { addSong } from './SongListActions'

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
      dispatch(addSong(res.data.songData))
      console.log('res.data:', res.data)
    } catch (error) {
      console.log('axios error:', error)
      // dispatch()
    }
  }
}

// export const getSongsMetaData = (offset, limit) => {
//   return (dispatch) => {
//     const res = axios.get('/api/songs/metadata')
//   }
// }

// export const getAuth = () => {
//   return (dispatch) => {
//     const res = axios.get('/api/auth')
//   }
// }