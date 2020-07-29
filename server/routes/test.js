const router = require('express').Router()
const jwtAuth = require('../middleware/jwt-auth')

router.get('/', (req, res, next) => {
  console.log('get /test')
  console.log('decodedToken:', req.decodedToken)

  res.send('test route')
})

module.exports = router