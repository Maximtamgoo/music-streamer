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
  const { tempID, filename, loaded, total } = action
  switch (action.type) {
    case 'ADD_UPLOAD_ITEM':
      return { ...state, [tempID]: { filename, loaded, total } }
    case 'UPDATE_PROGRESS':
      return { ...state, [tempID]: { ...state[tempID], loaded, total } }
    default:
      return state
  }
}

export default uploadsReducer