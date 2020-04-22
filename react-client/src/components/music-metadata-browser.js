import * as mmd from 'music-metadata-browser'

const getMetaData = async (blob) => {

  return await mmd.parseBlob(blob)

  // return await musicMetadata.fetchFromUrl(url)

  // musicMetadata.parseReadableStream(readableStream)
  // .then(metadata => {
  //    console.log(metadata)
  //    readableStream.cancel()
  //  })
}

export { getMetaData }