const { spawn, exec } = require('child_process')
// const ffmpeg = require('fluent-ffmpeg')
// const { createWriteStream } = require('fs')
// const Readable = require('stream').Readable
// let readable = new Readable()

const createDashFiles = (stream, filename) => {

  return new Promise((resolve, reject) => {
    
    const dashFilename = `${filename}-manifest.mpd`
    const dashFilePath = `${__dirname}/temp/${dashFilename}`
    const segmentFilename = `${filename}-segment`
    const segmentFilePath = `${__dirname}/temp/${segmentFilename}`
    
    const args = ['-i', 'pipe:0', '-single_file_name', segmentFilename, '-f', 'dash', dashFilePath]
    const ffmpeg = spawn('ffmpeg', args)

    ffmpeg.on('error', (err) => {
      console.log('hello:1')
      console.log(err)
    })

    ffmpeg.stdin.on('error', (err) => {
      console.log('hello:2')
      console.log(err)
    })

    ffmpeg.stdout.on('error', (err) => {
      console.log('hello:3')
      console.log(err)
    })

    ffmpeg.stderr.once('error', (err) => {
      console.log('ffmpeg error:', err)
      reject(err)
    })

    ffmpeg.once('close', () => {
      console.log('ffmpeg close')
      resolve({ dashFilename, dashFilePath, segmentFilename, segmentFilePath })
    })

    stream.pipe(ffmpeg.stdin)
    // ffmpeg.stdout.pipe(createWriteStream(dashFilePath))
  })
}

module.exports = { createDashFiles }