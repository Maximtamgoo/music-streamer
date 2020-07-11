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
app.use('/', require('./routes/songUpload'))

app.get('/songs/data', async (req, res, next) => {
  console.log('get /songs/data')
  console.log('req.query.lastItemDate:', req.query.lastItemDate)
  try {
    const limit = 4
    let songList = await StreamSongs.getOlderSongList(req.query.lastItemDate, limit)
    // songList = songList.map(({ _id, uploadDate, metadata }) => ({ _id, uploadDate, ...metadata }))
    console.log('songList:', songList)
    res.send({ songList })
  } catch (error) {
    res.send('hello')
    // console.log('/songs/data error:', error)
    // res.status(500).send({ error })
  }
})

// app.get('/song/stream/:id', async (req, res, next) => {
//   console.log('get /song/stream')
//   try {
//     const _id = new mongoose.mongo.ObjectID(req.params.id)
//     const fileData = await gridFS.bucket.find({ _id }).project({ length: 1 }).toArray()
//     const fileLength = fileData[0].length

//     const positions = req.headers.range.replace(/bytes=/, '').split('-')
//     const start = parseInt(positions[0], 10)
//     const end = positions[1] ? parseInt(positions[1], 10) : fileLength - 1
//     const chunksize = (end - start)

//     console.log('start:', start)
//     console.log('end:', end)
//     console.log('fileLength:', fileLength)

//     res.writeHead(206, {
//       'Content-Range': `bytes ${start}-${end}/${fileLength}`,
//       'Accept-Ranges': 'bytes',
//       'Content-Length': chunksize,
//       // 'Content-Type': 'audio/flac'
//       'Content-Type': 'application/octet-stream'
//     })

//     gridFS.bucket.openDownloadStream(_id, { start, end }).pipe(res)
//   } catch (error) {
//     console.log('error:', error)
//   }
// })

//http://localhost:3001/temp/2230d446-581a-4ccb-93a1-726aa21180be.mpd
//http://localhost:3001/song/stream/5f0265a060583e2a5c9d624f
const ObjectId = require('mongoose').mongo.ObjectId
app.get('/song/stream/:songId', async (req, res, next) => {
  console.log('get /song/stream/:songId')
  //TODO check if segment- or manifest-

  const songId = req.params.songId
  // const manifest = await streamSongs.getDashManifest()

  streamSongs.bucket.openDownloadStream(ObjectId(songId))
    .pipe(res)
    .on('error', function (error) {
      console.log('error:', error)
    })
    .on('finish', function () {
      console.log('download done!')
    })

  // res.sendFile(`${__dirname}/ffmpeg-test/single-dash.mpd`)
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