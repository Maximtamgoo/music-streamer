// const songList = {
//   '12345': {
//     id: '12345',

//     title: 'song title',
//     artists: ['artist name 1'],
//     album: 'album name',
//     timestamp: '987654321',
//     duration: 150,

//     filename: 'song.mp3',
//     loaded: 12345,
//     total: 10000,

//     prevSong: '',
//     nextSong: ''
//   }
// }

const SongList = {}

const SongListReducer = (state = SongList, action) => {
  const { id, title, artists, album, duration, uploadDate } = action
  switch (action.type) {
    case 'ADD_SONG':
      return { ...state, [id]: { id, title, artists, album, duration, uploadDate } }
    default:
      return state
  }
}

export default SongListReducer