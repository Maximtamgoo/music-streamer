const ObjectId = require('mongoose').mongo.ObjectId
const GridFS = require('./GridFS')

class StreamSongs {
  constructor() {
    this.bucket
  }

  setBucket(bucket) {
    this.bucket = bucket
  }

  async uploadFileStream(stream, filename, contentType, metadata) {
    return GridFS.uploadFileStream(this.bucket, stream, filename, contentType, metadata)
  }

  async getDashManifest(songId) {
    if (this.bucket === undefined) {
      throw Error('bucket is undefined')
    }

    return new Promise((resolve, reject) => {
      this.bucket.openDownloadStream(ObjectId(songId))
        .pipe(createWriteStream('./output.flac'))
        .on('error', function (error) {
          reject(error)
        })
        .on('finish', function () {
          resolve('download done!')
        })
    })
  }

  async getOlderSongList(lastItemDate, limit) {
    if (this.bucket === undefined) {
      throw Error('bucket is undefined')
    }

    const projectObj = {
      uploadDate: 1,
      length: 1,
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

module.exports = new StreamSongs()