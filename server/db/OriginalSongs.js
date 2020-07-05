const GridFS = require('./GridFS')

class OriginalSongs {
  constructor() {
    this.bucket
  }

  setBucket(bucket) {
    this.bucket = bucket
  }

  uploadFileStream(stream, filename) {
    return GridFS.uploadFileStream(this.bucket, stream, filename, contentType)
  }
}

module.exports = new OriginalSongs()