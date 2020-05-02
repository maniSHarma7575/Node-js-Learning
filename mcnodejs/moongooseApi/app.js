const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/test', { useUnifiedTopology: true })
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
app.use(logger('dev'))
app.use(bodyParser.json())

const Account = mongoose.model('Acccount', {
    name: String,
    balance: Number
})
app.get('/accounts', (req, res, next) => {
    Account.find({}, null, { sort: { _id: -1 } }, (error, accounts) => {
        if (error)
            return next(error)
        res.send(accounts);
    })

})
app.param('id', (req, res, next) => {
    Account.findById(req.params.id, (error, account) => {
        req.account = account
        next()
    })

})
app.get('/accounts/:id', (req, res, next) => {
    Account.findById(req.params.id, (error, account) => {
        if (error) return next(error)
        res.send(account.toJSON())
    })

})
app.post('/accounts', (req, res, next) => {
    let newAccount = new Account(req.body)
    newAccount.save((error, result) => {
        if (error) return next(error)
        res.send(result)
    })

})

app.put('/accounts:id', (req, res, next) => {
    Account.findById(req.params.id, (error, account) => {
        if (error) return next(error)
        if (req.body.name) account.name = req.body.name
        if (req.body.balance) account.balance = req.body.balance
        account.save((error, result) => {
            if (error) return next(error)
            res.send(result)
        })
    })

})
app.delete('/accounts:id', (req, res, next) => {
    Account.findById(req.params.id, (error, account) => {
        if (error) return next(error)
        account.remove((error, results) => {
            if (error) return next(error)
            res.send(results)
        })
    })

})
app.use(errorhandler())
app.listen(8000)