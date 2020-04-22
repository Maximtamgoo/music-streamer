const { MongoClient, GridFSBucket } = require('mongodb')
const uploadFile = require('./uploadFile')
const downloadFile = require('./downloadFile')

module.exports = (() => {
  let db = 'test'
  console.log('this:', this)

  return {
    connect: function (url, dbName) {
      return 'a connection'
    }
  }
})()





class MongoDB {
  constructor() {
    this.db = 'test'
  }
  async connect(url, dbName) {
    try {
      const client = new MongoClient(url, { useUnifiedTopology: true })
      await client.connect()
      const db = client.db(dbName)
      console.log("Connected successfully to server")
    } catch (error) {
      console.log('error:', error)
    }
  }
}

// module.exports = new MongoDB()


// async function test(test) {
//   console.log('test:', test)


//   const url = 'mongodb://localhost:27017'
//   const dbName = 'music-streaming-db'
//   const client = new MongoClient(url, { useUnifiedTopology: true })


//   try {
//     await client.connect()
//     const db = client.db(dbName)
//     console.log("Connected successfully to server")

//     let r = await db.collection('users').insertOne({
//       username: 'max',
//       password: 'hashed',
//       songs: {

//       }
//     })

    // let r = await db.collection('inserts').find().toArray()
    // let r = await db.collection('inserts').deleteMany({a:1})

    // const bucket = new GridFSBucket(db, { bucketName: 'Songs' })
    // const r = await uploadFile(bucket)
    // const r = await downloadFile(bucket)
//     console.log('result:', r)

//   } catch (error) {
//     console.log('error:', error)
//   }
//   client.close()

// }
