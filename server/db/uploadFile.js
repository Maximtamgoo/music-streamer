const { createReadStream } = require('fs')

async function uploadFile(bucket) {
  return new Promise((resolve, reject) => {
    createReadStream('./db/35 Hunt or Be Hunted.flac')
      .pipe(bucket.openUploadStream('./db/35 Hunt or Be Hunted.flac'))
      .on('error', (error) => {
        reject(error)
      })
      .on('finish', () => {
        resolve('up done!')
      })
  })
}

module.exports = uploadFile