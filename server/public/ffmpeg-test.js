// const ffmpeg = require('fluent-ffmpeg')
// const { createWriteStream } = require('fs')

// const stream = createWriteStream('a-dash.mpd')

// try {
//   ffmpeg()
//     .outputOptions(['-i','35 Hunt or Be Hunted.flac', '-single_file_name', 'a-stream', '-f', 'dash'])
//     .output('temp/a-dash.mpd')
//     // .output('a-stream')
//     .on('error', (error) => {
//       console.log('error:', error)
//     })
//     .on('end', (end) => {
//       console.log('end:', end)
//     })
//     .run()
// } catch (error) {
//   console.log('catch error:', error)
// }
;
(async () => {

  const { createReadStream } = require('fs')
  const { spawn } = require('child_process')

  const inputFile = createReadStream("35 Hunt or Be Hunted.flac")
  inputFile.on('error', (err) => {
    console.log(err)
  })

  const args = ['-i', 'pipe:0', '-single_file_name', 's-stream', '-f', 'dash', 'temp/s-dash.mpd']
  const ffmpeg = spawn('ffmpeg', args)

  ffmpeg.on('error', (err) => {
    console.log(err)
  })

  ffmpeg.stderr.on('error', (err) => {
    console.log(err)
  })

  ffmpeg.stdin.on('error', (err) => {
    console.log(err)
  })

  ffmpeg.stdout.on('error', (err) => {
    console.log(err)
  })

  inputFile.pipe(ffmpeg.stdin)

  ffmpeg.once('close', (close) => {
    console.log('close:', close)
  })

})()