const { parseStream } = require('music-metadata')

const fromStream = async (stream) => {
  try {
    const metadata = await parseStream(stream)
    const { album, artists, picture, title, track, year } = metadata.common
    const { duration } = metadata.format
    return { album, artists, picture, title, track, year, duration }
  } catch (error) {
    throw error
  }
}

module.exports = { fromStream }