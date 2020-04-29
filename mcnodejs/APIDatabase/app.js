const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const mongodb = require('mongodb')
const bodyParser = require('body-parser')
const url = 'mongodb://localhost:27017/edx-course-db'
let app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
mongodb.MongoClient.connect(url, (error, database) => {
    if (error) return process.exit(1)
    const db = database.db('edx-course-db');
    app.get('/accounts', (req, res) => {
        db.collection('accounts')
            .find({}, { sort: { _id: -1 } })
            .toArray((error, accounts) => {
                if (error) return next(error)
                res.send(accounts)
            })
    })
    app.post('/accounts', (req, res) => {
        let newAccount = req.body
        db.collection('accounts').insert(newAccount, (error, results) => {
            if (error) return next(error)
            res.send(results)
        })
    })
    app.put('/accounts/:id', (req, res) => {
        db.collection('accounts')
            .update({ _id: mongodb.ObjectID(req.params.id) }, { $set: req.body },
                (error, results) => {
                    if (error) return next(error)
                    res.send(results)
                }
            )
    })
    app.delete('/accounts/:id', (req, res) => {
        db.collection('accounts')
            .remove({ _id: mongodb.ObjectID(req.params.id) }, (error, results) => {
                if (error) return next(error)
                res.send(results)
            })
    })
    app.listen(8000)
})