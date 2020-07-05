import axios from 'axios'

export const getSongsData = ({ lastItemDate }) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/songs/data?lastItemDate=${lastItemDate}`)
      console.log('getSongsData res:', res.data)
      dispatch(addSongListToTail(res.data.songList))
    } catch (error) {
      console.log('axios error:', error)
      // dispatch()
    }
  }
}

export const getSongStream = (id) => {
  return async (dispatch) => {
    try {
      // const res = await axios.get(`/stream/song/${id}`, {
      //   headers: {
      //     'Range': 'bytes=0-1000'
      //   }
      // })
      // console.log('getSongStream res:', res)

      // const mediaSource = new MediaSource()
      const audio = new Audio(`/stream/song/${id}`)
      audio.play()
      
      // const sourceBuffer = null

      // mediaSource.addEventListener('sourceopen', onMediaSourceOpen)

      // function onMediaSourceOpen() {
      //   console.log('hello:')
      //   sourceBuffer = mediaSource.addSourceBuffer('audio/flac')
      //   sourceBuffer.addEventListener('updateend', appendToBuffer)

      //   audio.play()
      // }

      // function appendToBuffer() {
      //   sourceBuffer.appendBuffer(new Uint8Array(res.data))
      // }

      // dispatch()
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