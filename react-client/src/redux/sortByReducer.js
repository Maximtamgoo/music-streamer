const sortBy = 'uploadDate'

const sortByReducer = (state = sortBy, action) => {
  switch (action.type) {
    case 'SORT_BY_TITLE':
      return 'title'
    case 'SORT_BY_UPLOAD_DATE':
      return 'uploadDate'
    default:
      return state
  }
}

export default sortByReducer