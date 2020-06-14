import axios from 'axios'

export const getSongsData = ({ lastItemDate }) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/api/songs/data?lastItemDate=${lastItemDate}`)
      console.log('getSongsData res:', res.data)
      dispatch(addSongListToTail(res.data.songList))
    } catch (error) {
      console.log('axios error:', error)
      // dispatch()
    }
  }
}

export const addSongDataToHead = (songData) => ({
  type: 'ADD_SONG_DATA_TO_HEAD',
  songData
})

export const addSongListToTail = (songList) => ({
  type: 'ADD_SONG_LIST_TO_TAIL',
  songList
})

export const removeSong = () => ({
  type: 'REMOVE_SONG'
})