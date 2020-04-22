const express = require('express')
const app = express()
const Readable = require('stream').Readable

const mongoose = require('mongoose')

let gridFSBucket = null
mongoose.connect('mongodb://localhost:27017/music-streaming-db', { useNewUrlParser: true, useUnifiedTopology: true }).then(client => {
  gridFSBucket = new mongoose.mongo.GridFSBucket(client.connection.db, { bucketName: 'songs' })
}).catch(error => {
  console.log('error.name:', error.name)
  console.log('error.message:', error.message)
})

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
const upload = multer()

app.use(express.json())
// app.use(express.static('public'))

app.get('/api', (req, res) => {
  res.send('get /api')
})

app.post('/api/upload', upload.single('songs'), async (req, res) => {
  console.log('req.file:', req.file)
  console.log('req.body:', req.body)
  try {
    const readable = new Readable()
    readable.push(req.file.buffer)
    readable.push(null)
    readable.pipe(gridFSBucket.openUploadStream(req.file.originalname, {
      metadata: {
        test: 'some data'
      }
    }))
    .on('finish', (finish) => {
      console.log('finish:', finish)
      res.send('response from /api/upload')
    })
    .on('error', (error) => {
      console.log('error:', error)
    })
  } catch (error) {
    console.log('error:', error)
  }
  

  // res.send({status: 'no code yet'})
})

const port = 3001
app.listen(port, () => console.log(`Started server at port ${port}`))