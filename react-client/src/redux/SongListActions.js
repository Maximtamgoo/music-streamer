import axios from 'axios'

export const getSongsData = ({ lastItemDate }) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/api/songs/data?lastItemDate=${lastItemDate}`)
      console.log('getSongsData res:', res.data)

      res.data.songList.forEach((songData) => {
        dispatch(addSongToTail(songData))
      })

    } catch (error) {
      console.log('axios error:', error)
      // dispatch()
    }
  }
}

export const addSongToHead = ({ _id, uploadDate, metadata }) => {
  const { title, artists, album, duration } = metadata
  return {
    type: 'ADD_SONG_TO_HEAD',
    _id, title, artists, album, duration, uploadDate
  }
}

export const addSongToTail = ({ _id, uploadDate, metadata }) => {
  const { title, artists, album, duration } = metadata
  return {
    type: 'ADD_SONG_TO_TAIL',
    _id, title, artists, album, duration, uploadDate
  }
}

export const removeSong = () => ({
  type: 'REMOVE_SONG'
})