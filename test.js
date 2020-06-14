const moment = require('moment')
const { min } = require('moment')

// console.log('Date')
// console.log('Date.now()  :', Date.now())
// console.log('dateTOmoment:', moment(Date.now()).format("dddd, MMMM Do YYYY, h:mm:ss a"))

// const utc = moment().utc()
// const utcTOlocal = moment.utc(utc).local().format("dddd, MMMM Do YYYY, h:mm:ss a")
// const local = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")

// // const d = new Date()

// console.log('moment')
// console.log('utc         :', utc.valueOf())
// console.log('utcTOlocal  :', utcTOlocal)
// console.log('local       :', local)

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms))
// }

const mongo = moment("2020-06-14T18:52:09.638Z").format('YYYY-MM-D')
console.log('mongo:', mongo)

// const duration = 159.6865306122449
// const duration = 8959.6865306122449
const duration = 6800

let seconds = moment.duration(duration, 'seconds').seconds()
let minutes = moment.duration(duration, 'seconds').minutes()
let hours = moment.duration(duration, 'seconds').hours()

let formatted = (hours === 0) ? '' : `${hours}:`
formatted += ((hours === 0 && minutes < 10) || (hours != 0 && minutes < 10)) ? `0${minutes}:` : `${minutes}:`
formatted += (seconds < 10) ? `0${seconds}` : `${seconds}`

// if (formatted.startsWith('0')) { formatted = formatted.substr(1) }

// const formatted = (hours === 0) ? `${minutes} : ${seconds}` : `${hours} : ${minutes} : ${seconds}`
// const formatted = `${hours} : ${minutes} : ${seconds}`

console.log('seconds:', seconds)
console.log('minutes:', minutes)
console.log('hours:', hours)
console.log('formatted:', formatted)