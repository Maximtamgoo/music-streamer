const { MongoClient, GridFSBucket } = require('mongodb')

class MongoDB {
  constructor() {

  }

  async connect(url, dbName, cb) {
    try {
      const client = new MongoClient(url, { useUnifiedTopology: true })
      await client.connect()
      const db = client.db(dbName)
      console.log("Connected successfully to server")
      return db
    } catch (error) {
      console.log('error:', error)
    }
  }
}

module.exports = new MongoDB()