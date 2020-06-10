export const addUploadItem = ({ id, filename, timestamp }) => ({
  type: 'ADD_UPLOAD_ITEM',
  id, filename, loaded: null, total: null, timestamp
})

export const updateProgress = (id, loaded, total) => ({
  type: 'UPDATE_PROGRESS',
  id, loaded, total
})

export const removeUploadItem = () => ({
  type: 'REMOVE_UPLOAD_ITEM'
})