import axios from 'axios'
import { v1 as uuidv1 } from 'uuid'

export const uploadSongs = (songs) => {
  return async (dispatch) => {
    songs.map(async (song, index) => {
      console.log('song:', song)
      try {
        const formData = new FormData()
        formData.append('song', song)
        const id = uuidv1()
        dispatch(addUploadItem({ id, name: song.name }))
        const res = await axios.post('/api/upload/single', formData, {
          onUploadProgress: (progressEvent) => {
            // console.log('progressEvent:', progressEvent)
            const { loaded, total } = progressEvent
            dispatch(updateProgress(id, loaded, total))
          }
        })
        // dispatch(addSong)
      } catch (error) {
        console.log('uploadSongs error:', error)
        // dispatch()
      }
    })

  }
}

export const addUploadItem = ({ id, name }) => ({
  type: 'ADD_UPLOAD_ITEM',
  id, name, loaded: null, total: null
})

export const updateProgress = (id, loaded, total) => ({
  type: 'UPDATE_PROGRESS',
  id, loaded, total
})

export const removeUploadItem = () => ({
  type: 'REMOVE_UPLOAD_ITEM'
})