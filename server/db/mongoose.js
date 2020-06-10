const mongoose = require('mongoose')

module.exports = (url) => {
  mongoose.connect('mongodb://localhost:27017/music-streaming-db', {
    useNewUrlParser: true, useUnifiedTopology: true
  }).then(client => {
    let gridFSBucket = new mongoose.mongo.GridFSBucket(client.connection.db, { bucketName: 'songs' })
    // const _id = new mongoose.mongo.ObjectID('5ee027c6af34452adc8fbdd3')
    // gridFSBucket.delete(_id, (result) => {
    //   console.log('result:', result)
    // })

  }).catch(error => {
    console.log('error.name:', error.name)
    console.log('error.message:', error.message)
  })
  return {mongoose, gridFSBucket}
}