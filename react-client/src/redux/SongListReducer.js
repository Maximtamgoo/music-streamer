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

const songList = {}

const songListReducer = (state = songList, action) => {
  const { id, title, artists, album, duration, uploadDate } = action
  switch (action.type) {
    case 'ADD_SONG':
      return { ...state, [id]: { id, title, artists, album, duration, uploadDate } }
    default:
      return state
  }
}

export default songListReducer