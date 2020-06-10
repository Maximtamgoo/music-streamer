const Readable = require('stream').Readable

class GridFS {
  constructor() {
    this.bucket
  }

  setBucket(bucket) {
    this.bucket = bucket
  }

  async uploadFileBuffer(buffer, filename, metadata) {
    return new Promise((resolve, reject) => {
      let readable = new Readable()
      readable.push(buffer)
      readable.push(null)
      readable.pipe(this.bucket.openUploadStream(filename, { metadata }))
        .on('error', (error) => {
          reject(error)
        })
        .on('finish', (finish) => {
          console.log('finish:', finish)
          resolve(finish)
        })

    })
  }
}

module.exports = new GridFS()