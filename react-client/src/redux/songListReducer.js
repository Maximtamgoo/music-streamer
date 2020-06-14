// const songList = [
//   {
//     _id: '12345',
//     title: 'song title',
//     artists: ['artist name 1'],
//     album: 'album name',
//     duration: 150,
//     uploadDate: '987654321'
//   }
// ]

const songList = []

const songListReducer = (state = songList, action) => {
  switch (action.type) {
    case 'ADD_SONG_LIST_TO_TAIL':
      return [...state, ...action.songList]
    case 'ADD_SONG_DATA_TO_HEAD':
      return [{ ...action.songData }, ...state]
    default:
      return state
  }
}

export default songListReducer