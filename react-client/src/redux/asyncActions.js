import axios from 'axios'
import { updateProgress } from './SongListActions'

export const uploadSong = (song, id) => {
  return (dispatch) => {
    const formData = new FormData()
    formData.append('song', song)
    formData.append('tempID', id)

    // const metadata = { fake: 'fake data' }
    // formData.append('metadata', JSON.stringify(metadata))

    return axios.post('/api/upload/song', formData, {
      onUploadProgress: (progressEvent) => {
        // console.log('progressEvent:', progressEvent)
        const { loaded, total } = progressEvent
        dispatch(updateProgress(id, loaded, total))
      }
    })
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