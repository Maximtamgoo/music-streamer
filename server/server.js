'use strict'
const express = require('express')
const app = express()
const extractMetadata = require('./utils/extractMetadata')

app.use(express.json())
// app.use(express.static('public'))

const gridFS = require('./db/GridFS')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/music-streaming-db', {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(client => {
  let gridFSBucket = new mongoose.mongo.GridFSBucket(client.connection.db, { bucketName: 'songs' })
  // const _id = new mongoose.mongo.ObjectID('5ee027c6af34452adc8fbdd3')
  // gridFSBucket.delete(_id, (result) => {
  //   console.log('result:', result)
  // })
  // await gridFSBucket.find().limit().toArray()
  gridFS.setBucket(gridFSBucket)
}).catch(error => {
  console.log('error.name:', error.name)
  console.log('error.message:', error.message)
})

// const User = mongoose.model('users', { username: String })

// const user = new User({username: 'tam'})

const multer = require('multer')
const multerUpload = multer({ limits: { files: 20, fileSize: 2.5e7 } }) // 25mb 2.5e7, 10mb 1e7

app.post('/api/upload/song', multerUpload.single('song'), async (req, res, next) => {
  console.log(`/api/upload/song: ${req.file.originalname}`)
  try {
    const extractedMetadata = await extractMetadata.fromBuffer(req.file.buffer)
    const songData = await gridFS.uploadFileBuffer(req.file.buffer, req.file.originalname, extractedMetadata)
    res.send({ songData })
  } catch (error) {
    console.log('/api/upload/song error:', error)
    res.send({ error })
  }
})

app.get('/api/songs/data', async (req, res, next) => {
  try {
    const limit = 2
    let songList = await gridFS.getOlderSongList(req.query.lastItemDate, limit)
    // songList = songList.map(({ _id, uploadDate, metadata }) => ({ _id, uploadDate, ...metadata }))
    console.log('songList:', songList)
    res.send({ songList })
  } catch (error) {
    console.log('/api/songs/data error:', error)
    res.status(500).send({ error })
  }
})

app.use((error, req, res, next) => {
  console.log('error handler:', error)
  if (error && error.name === 'MulterError') {
    res.send({ error: error.code })
  } else {
    res.send({ error })
  }
})

const port = 3001
app.listen(port, () => console.log(`Started server at port ${port}`))