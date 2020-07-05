const mongoose = require('mongoose')
const GridFS = require('./OriginalSongs_GridFS')

module.exports = (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const client = await mongoose.connect(url, {
        useNewUrlParser: true, useUnifiedTopology: true
      })
      console.log('mongoose client connected.')
  
      const originalSongs_Bucket = new mongoose.mongo.GridFSBucket(client.connection.db, {
        bucketName: 'originalsongs'
      })
  
      const streamSongs_Bucket = new mongoose.mongo.GridFSBucket(client.connection.db, {
        bucketName: 'streamsongs'
      })
  
      const originalSongs = new GridFS(originalSongs_Bucket)
      const streamSongs = new GridFS(streamSongs_Bucket)
      resolve({ mongoose, originalSongs, streamSongs })
    } catch (error) {
      console.log('connectMongoose.js error')
      console.log('error.name:', error.name)
      console.log('error.message:', error.message)
      reject({ mongoose: undefined, originalSongs: undefined, streamSongs: undefined })
    }
  })
}