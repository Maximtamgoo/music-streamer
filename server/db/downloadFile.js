const { createReadStream, createWriteStream } = require('fs')

async function downloadFile(bucket) {
  return new Promise((resolve, reject) => {
    bucket.openDownload('35 Hunt or Be Hunted.flac')
      .pipe(createWriteStream('./output.flac'))
      .on('error', function (error) {
        reject(error)
      })
      .on('finish', function () {
        resolve('down done!')
      })
  })
}

module.exports = downloadFile