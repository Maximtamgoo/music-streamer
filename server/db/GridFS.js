const Readable = require('stream').Readable

class GridFS {
  constructor() {
    this.bucket
  }

  setBucket(bucket) {
    this.bucket = bucket
  }

  async uploadFileBuffer(buffer, filename, metadata) {
    if (this.bucket === undefined) {
      throw Error('GridFS.bucket is undefined')
    }

    return new Promise((resolve, reject) => {
      let readable = new Readable()
      readable.push(buffer)
      readable.push(null)
      readable.pipe(this.bucket.openUploadStream(filename, { metadata }))
        .on('error', (error) => {
          reject(error)
        })
        .on('finish', (finish) => {
          const { _id, uploadDate } = finish
          const { title, artists, album, duration, track } = finish.metadata
          resolve({ _id, uploadDate, metadata: { title, artists, album, duration, track } })
        })
    })
  }

  async getOlderSongList(lastItemDate, limit) {
    if (this.bucket === undefined) {
      throw Error('GridFS.bucket is undefined')
    }

    const projectObj = {
      uploadDate: 1,
      'metadata.title': 1,
      'metadata.artists': 1,
      'metadata.album': 1,
      'metadata.duration': 1,
      'metadata.track': 1
    }

    try {
      if (lastItemDate === 'start') {
        return await this.bucket.find().sort({ uploadDate: -1 })
          .limit(limit).project(projectObj).toArray()
      } else {
        return await this.bucket.find({ uploadDate: { $lt: new Date(lastItemDate) } }).sort({ uploadDate: -1 })
          .limit(limit).project(projectObj).toArray()
      }
    } catch (error) {
      throw error
    }
  }
}

module.exports = new GridFS()