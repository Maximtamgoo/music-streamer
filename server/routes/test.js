const router = require('express').Router()

router.get('/test', (req, res, next) => {
  console.log('get /test')
  res.send('test route')
})

module.exports = router