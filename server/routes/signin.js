const router = require('express').Router()

router.post('/signin', (req, res, next) => {
  console.log('post /signin')
  res.end()
})

module.exports = router