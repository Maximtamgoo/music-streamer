// const initState = {
//   34253461523: {
//     name: 'song.mp3',
//     loaded: null,
//     total: null
//   }
// }

const initState = {}

const uploadsReducer = (state = initState, action) => {
  const { id, name, loaded, total } = action
  switch (action.type) {
    case 'ADD_UPLOAD_ITEM':
      return { ...state, [id]: { name, loaded, total } }
    case 'UPDATE_PROGRESS':
      return { ...state, [id]: { ...state[id], loaded, total } }
    default:
      return state
  }
}

export default uploadsReducer