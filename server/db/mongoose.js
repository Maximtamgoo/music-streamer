const mongoose = require('mongoose')


module.exports = (async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/music-streaming-db', { useNewUrlParser: true, useUnifiedTopology: true })
    const gridFSBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: 'songs' })
    throw 'a fake'
    return { mongoose, gridFSBucket }
  } catch (error) {
    console.log('error:', error)
    throw error
  }
})()

// class Mongoose {
//   constructor() {
//     this.mongoose = mongoose
//   }

//   connect(url) {
//     try {
//       const conn = await mongoose.connect('mongodb://localhost:27017/music-streaming-db', { useNewUrlParser: true, useUnifiedTopology: true })

//     } catch (error) {
//       return error
//     }
//   }

//   connect_GridFSBucket(db, options) {
//     const gridFSBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, options)
//   }
// }
// module.exports = new Mongoose()

// uploadFile(gridFSBucket)