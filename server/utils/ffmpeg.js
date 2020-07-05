const { spawn } = require('child_process')
const createDir = require('./createDir')

const createDashFiles = (stream, filename) => {
  return new Promise(async (resolve, reject) => {
    try {
      await createDir(`${__dirname}/temp`)

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

    } catch (error) {
      reject(error)
    }
  })
}

module.exports = { createDashFiles }