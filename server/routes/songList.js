const router = require('express').Router()

router.get('/song/list', async (req, res, next) => {
  console.log('get /song/list')
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

module.exports = router