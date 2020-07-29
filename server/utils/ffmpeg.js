const { spawn } = require('child_process')
const createDir = require('./createDir')
const { v4: uuidv4 } = require('uuid')

const convertstreamToOgg = (stream) => {
  return new Promise((resolve, reject) => {
    //ffmpeg -i "03 - Peaceful Sleep.mp3" -acodec libvorbis mp3.oga
    const args = ['-i', 'pipe:0', '-acodec', 'libvorbis', '-f', 'ogg', 'pipe:1']
    const ffmpeg = spawn('ffmpeg', args)

    ffmpeg.once('error', (err) => {
      // console.log('ffmpeg error:', err)
      reject(err)
    })

    ffmpeg.stdin.once('error', (err) => {
      // console.log('ffmpeg.stdin error:', err)
      reject(err)
    })

    ffmpeg.stdout.once('error', (err) => {
      // console.log('ffmpeg.stdout error:', err)
      reject(err)
    })

    ffmpeg.stderr.once('error', (err) => {
      // console.log('ffmpeg.stderr error:', err)
      reject(err)
    })

    ffmpeg.once('close', () => {
      console.log('ffmpeg close')
    })

    ffmpeg.stdin.once('pipe', () => {
      console.log('ffmpeg.stdin pipe')
      resolve(ffmpeg.stdout)
    })

    stream.pipe(ffmpeg.stdin)
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

      const args = ['-i', 'pipe:0', '-single_file_name', segmentFilePath, '-f', 'dash', dashFilePath]
      const ffmpeg = spawn('ffmpeg', args)

      ffmpeg.once('error', (err) => {
        console.log('ffmpeg error:', err)
        reject(err)
      })
  
      ffmpeg.stdin.once('error', (err) => {
        console.log('ffmpeg.stdin error:', err)
        reject(err)
      })
  
      ffmpeg.stdout.once('error', (err) => {
        console.log('ffmpeg.stdout error:', err)
        reject(err)
      })
  
      ffmpeg.stderr.once('error', (err) => {
        console.log('ffmpeg.stderr error:', err)
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

// const { Transform, pipeline } = require('stream')
// const { createWriteStream } = require('fs')

// const transformBaseUrl = new Transform({
//   a: this.a = 1,
//   transform(chunk, encoding, callback) {
//     // const data = chunk.replace(/<BaseURL>.*<\/BaseURL>/, `<BaseURL>${url}</BaseURL>`)
//     // console.log('chunk:', chunk.toString())
//     callback(null, chunk)
//   }
// })

module.exports = { createDashFiles, convertstreamToOgg }