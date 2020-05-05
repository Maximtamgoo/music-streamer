const Readable = require('stream').Readable

class GridFS {
  constructor() {
    this.bucket
  }

  setBucket(bucket) {
    this.bucket = bucket
  }

  async uploadFileBuffer(filename, buffer, metadata) {
    return new Promise((resolve, reject) => {
      let readable = new Readable()
      readable.push(buffer)
      readable.push(null)
      readable.pipe(this.bucket.openUploadStream(filename, { metadata }))
        .on('finish', (finish) => {
          console.log('finish:', finish)
          resolve()
        })
        .on('error', (error) => {
          reject(error)
        })
    })
  }
}

module.exports = new GridFS()