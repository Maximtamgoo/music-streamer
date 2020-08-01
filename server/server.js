'use strict'
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const streamSongs = require('./db/StreamSongs')

const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.static(`${__dirname}/public`))

mongoose.connect('mongodb://localhost:27017/music-streaming-db', {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(client => {
  // const originalSongs_Bucket = new mongoose.mongo.GridFSBucket(client.connection.db, {
  //   bucketName: 'originalsongs'
  // })
  const streamSongs_Bucket = new mongoose.mongo.GridFSBucket(client.connection.db, {
    bucketName: 'streamsongs'
  })
  // originalSongs.setBucket(originalSongs_Bucket)
  streamSongs.setBucket(streamSongs_Bucket)
  console.log('mongoose client connected.')
}).catch(error => {
  console.log('error.name:', error.name)
  console.log('error.message:', error.message)
})

// const User = mongoose.model('users', { username: String })
// const user = new User({username: 'tam'})

// http://localhost:3001/single-dash.mpd
// app.post('/song/upload')
// app.get('/song/metadata/')
// app.get('/song/stream/:dashid.mpd')
// app.get('/song/stream/:dashid.mpd')

app.use('/', require('./routes/test'))
app.use('/', require('./routes/register'))
// app.use('/', require('./routes/signin'))
app.use('/', require('./routes/songList'))
// app.use('/', require('./routes/songUpload'))

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