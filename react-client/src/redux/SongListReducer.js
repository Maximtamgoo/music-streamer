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
  const { id, filename, loaded, total, timestamp } = action
  switch (action.type) {
    case 'ADD_UPLOAD_ITEM':
      return { ...state, [id]: { id, filename, loaded, total, timestamp } }
    case 'UPDATE_PROGRESS':
      return { ...state, [id]: { ...state[id], loaded, total } }
    default:
      return state
  }
}

export default SongListReducer