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
          resolve(finish)
        })
    })
  }

  async getOlderSongData(lastItemDate, limit) {
    try {
      if (lastItemDate === 'start') {
        console.log('hello:')
        return await this.bucket.find().sort({ uploadDate: -1 })
          .limit(limit).project({ uploadDate: 1, metadata: 1 }).toArray()
      } else {
        return await this.bucket.find({ uploadDate: { $lt: new Date(lastItemDate) } }).sort({ uploadDate: -1 })
          .limit(limit).project({ uploadDate: 1, metadata: 1 }).toArray()
      }
    } catch (error) {
      return error
    }
  }
}

module.exports = new GridFS()