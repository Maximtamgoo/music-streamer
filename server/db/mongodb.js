const { MongoClient, GridFSBucket } = require('mongodb')
const uploadFile = require('./uploadFile')
const downloadFile = require('./downloadFile')

const url = 'mongodb://localhost:27017'
const dbName = 'music-streaming-db'
const client = new MongoClient(url, { useUnifiedTopology: true })
  ;
(async () => {
  try {
    await client.connect()
    const db = client.db(dbName)
    console.log("Connected successfully to server")

    let r1 = await db.collection('songs.files').find()
      .sort({ uploadDate: -1 }).limit(2)
      .project({ filename: 1, uploadDate: 1 }).toArray()
    console.log('query 1:', r1)

    let lastItem = r1[r1.length - 1]
    console.log('lastItem:', lastItem)
    let lastDate = lastItem.uploadDate
    

    let r2 = await db.collection('songs.files').find({ uploadDate: { $lt: new Date(lastDate) } })
      .sort({ uploadDate: -1 }).limit(2)
      .project({ filename: 1, uploadDate: 1 }).toArray()
    console.log('query 2:', r2)

    // let r = await db.collection('users').insertOne({
    //   username: 'max',
    //   password: 'hashed',
    //   songs: {

    //   }
    // })
    // let r = await db.collection('inserts').deleteMany({ a: 1 })

    // const bucket = new GridFSBucket(db, { bucketName: 'Songs' })
    // const r = await uploadFile(bucket)
    // const r = await downloadFile(bucket)


  } catch (error) {
    console.log('error:', error)
  }
  client.close()
})()
