'use strict'
const express = require('express')
const app = express()

// const mongoose = require('mongoose')
// const gridFS = require('./db/GridFS')

// mongoose.connect('mongodb://localhost:27017/music-streaming-db', { useNewUrlParser: true, useUnifiedTopology: true }).then(client => {
//   let gridFSBucket = new mongoose.mongo.GridFSBucket(client.connection.db, { bucketName: 'songs' })
//   gridFS.setBucket(gridFSBucket)
// }).catch(error => {
//   console.log('error.name:', error.name)
//   console.log('error.message:', error.message)
// })

// try {
//   const { mongoose, gridFSBucket } = require('./db/mongoose').connect()
//   const mongoose = mongoose.connect()
// } catch (error) {
//   console.log('server error:', error)
// }
// return

// mongoose.connect('mongodb://localhost:27017/music-streaming-db').then(db => {
//   mongoose.connect_GridFSBucket(db, { bucketName: 'songs' })
// }).catch(error => {
//   console.log('error:', error)
// })

// const User = mongoose.model('users', { username: String })

// const user = new User({username: 'tam'})

const multer = require('multer')
const multerUpload = multer({ limits: { files: 20, fileSize: 2.5e7 } }) // 25mb 2.5e7, 10mb 1e7

app.use(express.json())
// app.use(express.static('public'))

app.get('/api', (req, res) => {
  res.send('get /api')
})

app.post('/api/upload/single', multerUpload.single('song'), async (req, res, next) => {
  console.log('/api/upload/single')
  console.log('req.file:', req.file.originalName)

  res.send('res from /api/upload/single')
})

app.post('/api/upload', multerUpload.array('songs'), async (req, res, next) => {
  console.log('/api/upload')
  
  // const promises = req.files.map(file => {
  //   return file.originalName
  // })
  // const result = await Promise.all(promises)
  // console.log('result:', result)
  res.send('res from /api/upload')
})

app.use((error, req, res, next) => {
  console.log('error handler:', error)
  if (error && error.name === 'MulterError') {
    res.send({ error: error.code })
  } else {
    res.send({ error })
  }
})

// try {
// for (const file of req.files) {
//   let filename = await file.originalName
//   console.log('filename:', filename)
// }
// console.log('aaaaaaa')
// res.send('end')
// } catch (error) {
// console.log('error:', error)
// }
// console.log('req.body:', req.body)

// try {
//   const metadata = {
//     test: 'some NEW data'
//   }
//   const result = await gridFS.uploadFileBuffer(req.file.originalname, req.file.buffer, metadata)
//   res.send('good response from /api/upload')
// } catch (error) {
//   console.log('error:', error)
//   res.send('something went wrong with the upload')
// }

const port = 3001
app.listen(port, () => console.log(`Started server at port ${port}`))