const { mkdir } = require('fs')

const createDir = (dir) => {
  return new Promise((resolve, reject) => {
    mkdir(dir, (err) => {
      if (err) {
        if (err.code === 'EEXIST') {
          resolve(true)
        }
        reject(false)
      } else {
        resolve(true)
      }
    })
  })
}

module.exports = createDir