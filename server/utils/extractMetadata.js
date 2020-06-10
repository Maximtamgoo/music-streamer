const { parseBuffer } = require('music-metadata')

const fromBuffer = async (buffer) => {
  const metadata = await parseBuffer(buffer)
  const { album, artists, picture, title, track, year } = metadata.common
  const { duration } = metadata.format
  return { album, artists, picture, title, track, year, duration }
}

module.exports = { fromBuffer }