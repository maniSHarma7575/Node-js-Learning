const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const url = 'mongodb://localhost:27017/test'
const insertDocuments = (db, callback) => {
    // Get reference to edx-course-docs collection
    const collection = db.collection('test')
        // Insert 3 documents
    collection.insert([
        { name: 'Bob' }, { name: 'John' }, { name: 'Peter' } // 3 documents
    ], (error, result) => {
        if (error) return process.exit(1)
        console.log(result.result.n) // will be 3
        console.log(result.ops.length) // will be 3
        console.log('Inserted 3 documents into the edx-course-students collection')
        callback(result)
    })
}
const updateDocument = (db, callback) => {
    var collection = db.collection('test')
    const name = 'Manish'
    collection.update({ name: name }, { $set: { grade: 'A' } }, (error, result) => {
        if (error) return process.exit(1);
        console.log(result.result.n)
        console.log(`Update the student Document with name ${name}`);
        callback(result)
    })
}
const removeDocument = (db, callback) => {
    // Get the documents collection
    const collection = db.collection('edx-course-students')
        // Insert some documents
    const name = 'Bob'
    collection.remove({ name: name }, (error, result) => {
        if (error) return process.exit(1)
        console.log(result.result.n) // will be 1
        console.log(`Removed the document where name = ${name}`)
        callback(result)
    })
}
var findDocuments = (db, callback) => {
    // Get the documents collection
    var collection = db.collection('edx-course-students')
        // Find some documents
    collection.find({}).toArray((error, docs) => {
        if (error) return process.exit(1)
        console.log(2, docs.length) // will be 2 because we removed one document
        console.log(`Found the following documents:`)
        console.dir(docs)
        callback(docs)
    })
}
MongoClient.connect(url, (err, database) => {
    if (err) {
        console.log(`error ${err}`)
        return process.exit(1)
    }
    const db = database.db('edx-course-db');
    insertDocuments(db, () => {
        updateDocument(db, () => {
            removeDocument(db, () => {
                findDocuments(db, () => {

                })
            })
        })
    })
})