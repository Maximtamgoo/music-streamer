export const addUploadItem = ({ tempID, filename }) => ({
  type: 'ADD_UPLOAD_ITEM',
  tempID, filename, loaded: null, total: null
})

export const updateProgress = (id, loaded, total) => ({
  type: 'UPDATE_PROGRESS',
  id, loaded, total
})

export const removeUploadItem = () => ({
  type: 'REMOVE_UPLOAD_ITEM'
})