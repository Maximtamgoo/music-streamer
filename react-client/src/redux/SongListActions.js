export const addSong = ({ id, title, artists, album, duration, uploadDate }) => ({
  type: 'ADD_SONG',
  id, title, artists, album, duration, uploadDate
})

export const removeSong = () => ({
  type: 'REMOVE_SONG'
})