const router = require('express').Router()
const jwt = require('jsonwebtoken')

router.post('/register', (req, res, next) => {
  console.log('post /register')
  console.log('req.body:', req.body)

  delete req.body.password

  const aFakeSecret = 'aFakeSecret'
  const payload = req.body

  const token = jwt.sign(payload, aFakeSecret)
  console.log('created token:', token)

  res.send({ token })
})

module.exports = router