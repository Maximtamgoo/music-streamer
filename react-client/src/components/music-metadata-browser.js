import * as musicMetadata from 'music-metadata-browser'

const getMetaData = async (url) => {
  return await musicMetadata.fetchFromUrl(url)

  // musicMetadata.parseReadableStream(readableStream)
  // .then(metadata => {
  //    console.log(metadata)
  //    readableStream.cancel()
  //  })
}

export default getMetaData