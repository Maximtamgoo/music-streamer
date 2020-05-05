const Readable = require('stream').Readable
class MyGridFSStorage {
  constructor(fakedata) {
    this.fakedata = fakedata
  }
  _handleFile(req, file, cb) {
    console.log('_handleFile')
    console.log(this.fakedata)
    console.log('file:', file)
    const info = { message: `callback from ${file.originalname}` }
    cb('hello', info)
  }
  _removeFile(req, file, cb) {
    console.log('_removeFile')
    console.log(this.fakedata)
    const info = { message: `callback from _removeFile` }
    cb('asd')
  }
}

module.exports = MyGridFSStorage

// module.exports = function () {
//   return new MyGridFSStorage()
// }