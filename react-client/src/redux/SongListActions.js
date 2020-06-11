import axios from 'axios'

export const getSongsData = ({ lastItemDate }) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/api/songs/data?lastItemDate=${lastItemDate}`)
      console.log('getSongsData res:', res.data)
      // dispatch(addSong())
    } catch (error) {
      console.log('axios error:', error)
      // dispatch()
    }
  }
}

export const addSong = ({ id, title, artists, album, duration, uploadDate }) => ({
  type: 'ADD_SONG',
  id, title, artists, album, duration, uploadDate
})

export const removeSong = () => ({
  type: 'REMOVE_SONG'
})