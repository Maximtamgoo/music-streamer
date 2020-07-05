const router = require('express').Router()
const multer = require('multer')
const multerUpload = multer({ limits: { files: 20, fileSize: 2.5e7 } }) // 25mb 2.5e7, 10mb 1e7
const streamSongs = require('../db/StreamSongs')
const cloneable = require('cloneable-readable')
const { createReadStream, unlink } = require('fs')
const extractMetadata = require('../utils/extractMetadata')
const ffmpeg = require('../utils/ffmpeg')

router.post('/song/upload', multerUpload.single('song'), async (req, res, next) => {
  console.log(`post /song/upload: ${req.file.originalName}`)
  try {
    const reqStream = cloneable(req.file.stream)

    const reqFilename = req.file.originalName
    const extractedMetadata = await extractMetadata.fromStream(reqStream)
    console.log('Extracted Metadata')
    const { dashFilename, dashFilePath, segmentFilename, segmentFilePath } = await ffmpeg.createDashFiles(reqStream, reqFilename)
    reqStream.destroy()
    console.log('Created Dash Files')

    const dashStream = createReadStream(dashFilePath)
    const segmentStream = createReadStream(segmentFilePath)

    const docResult = await streamSongs.uploadFileStream(dashStream, dashFilename, 'dashmanifest', extractedMetadata)
    console.log(`Uploaded ${dashFilename}`)
    unlink(dashFilePath, (error) => (error) ? console.log('unlink error:', error) : console.log(`Unlinked ${dashFilePath}`))

    await streamSongs.uploadFileStream(segmentStream, segmentFilename, 'segment')
    console.log(`Uploaded ${segmentFilename}`)
    unlink(segmentFilePath, (error) => (error) ? console.log('unlink error:', error) : console.log(`Unlinked ${segmentFilePath}`))

    const { _id, uploadDate } = docResult
    const { title, artists, album, duration, track } = docResult.metadata
    const songData = { _id, uploadDate, metadata: { title, artists, album, duration, track } }

    // await originalSongs.uploadFileStream({ stream, filename })

    res.send({ songData })
  } catch (error) {
    console.log('/song/upload error:', error)
    res.send({ error })
  }
})

module.exports = router