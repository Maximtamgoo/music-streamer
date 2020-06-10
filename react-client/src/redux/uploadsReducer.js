// const uploadsList = {
//   '12345': {
//     id: '12345',
//     filename: 'song.mp3',
//     loaded: 12345,
//     total: 10000
//   }
// }

const uploadsList = {}

const uploadsReducer = (state = uploadsList, action) => {
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

export default uploadsReducer