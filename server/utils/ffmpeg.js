const { spawn } = require('child_process')
const createDir = require('./createDir')
const { v4: uuidv4 } = require('uuid')

const convertstreamToOgg = (stream) => {
  return new Promise(async (resolve, reject) => {
    //ffmpeg -i "03 - Peaceful Sleep.mp3" -acodec libvorbis mp3.oga
    const args = ['-i', 'pipe:0', '-acodec', 'libvorbis', 'pipe:1']
    const ffmpeg = spawn('ffmpeg', args)

    ffmpeg.stdout.on('end', (end) => {
      resolve(ffmpeg.stdout)
    })

    stream.pipe(ffmpeg.stdin)
    //! return ffmpeg.stdout

  })
}

const createDashFiles = (stream, filename) => {
  return new Promise(async (resolve, reject) => {
    try {
      await createDir(`${__dirname}/temp`)

      const dashId = uuidv4()

      const dashFilename = `manifest-${dashId}.mpd`
      const dashFilePath = `${__dirname}/temp/${dashFilename}`
      const segmentFilename = `segment-${dashId}`
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

module.exports = { createDashFiles, convertstreamToOgg }