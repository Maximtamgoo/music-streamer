const moment = require('moment')

console.log('Date')
console.log('Date.now():', Date.now())
console.log('dateTOmome:', moment(Date.now()).format("dddd, MMMM Do YYYY, h:mm:ss a"))

const utc = moment().utc()
const utcTOlocal = moment.utc(utc).local().format("dddd, MMMM Do YYYY, h:mm:ss a")
const local = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")

// const d = new Date()




console.log('moment')
console.log('utc       :', utc.valueOf())
console.log('utcTOlocal:', utcTOlocal)
console.log('local     :', local)

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}