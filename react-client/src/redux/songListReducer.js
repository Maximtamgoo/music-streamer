// const songList = {
//   '12345': {
//     id: '12345',
//     title: 'song title',
//     artists: ['artist name 1'],
//     album: 'album name',
//     duration: 150,
//     uploadDate: '987654321',

//     prevSong: '',
//     nextSong: ''
//   }
// }

const songList = []

const songListReducer = (state = songList, action) => {
  const { _id, title, artists, album, duration, uploadDate } = action
  switch (action.type) {
    case 'ADD_SONG_TO_TAIL':
      return [ ...state, { _id, title, artists, album, duration, uploadDate } ]
      case 'ADD_SONG_TO_HEAD':
        return [{ _id, title, artists, album, duration, uploadDate }, ...state]
    default:
      return state
  }
}

export default songListReducer