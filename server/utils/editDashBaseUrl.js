const { resolve } = require('path')

const readFile = require('util').promisify(require('fs').readFile)
const writeFile = require('util').promisify(require('fs').writeFile)

const editDashbaseUrl = async (filePath, url) => {
  try {
    const data = await readFile(filePath, 'utf8')
    const newData = data.replace(/<BaseURL>.*<\/BaseURL>/, `<BaseURL>${url}</BaseURL>`)
    return await writeFile('./temp/c-dash.mpd', newData, 'utf8')
  } catch (error) {
    throw error
  }
}

module.exports = editDashbaseUrl
// editDashbaseUrl('./temp/c-dash.mpd', 'http://localhost:3001/segment/c-segment')