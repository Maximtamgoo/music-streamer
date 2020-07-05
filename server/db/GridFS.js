class GridFS {
  static uploadFileStream(bucket, stream, filename, contentType, metadata) {
    if (bucket === undefined) {
      return Error('bucket is undefined')
    }

    return new Promise((resolve, reject) => {
      stream.pipe(bucket.openUploadStream(filename, { contentType, metadata }))
        .on('finish', (finish) => {
          stream.destroy()
          resolve(finish)
        })
        .on('error', (error) => {
          stream.destroy()
          reject(error)
        })
    })
  }
}

module.exports = GridFS