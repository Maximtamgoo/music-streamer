const jwt = require('jsonwebtoken')

const jwtAuth = (req, res, next) => {
  try {
    const aFakeSecret = 'aFakeSecret'
    const token = req.header('Authorization').replace('Bearer ', '')
    const decoded = jwt.verify(token, aFakeSecret)
    req.decodedToken = decoded
    next()
  } catch (error) {
    res.status(401).send({ error: 'Unauthorized' })
  }
}

module.exports = jwtAuth