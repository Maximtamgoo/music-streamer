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
app.get('/song/manifest/:songId', async (req, res, next) => {
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