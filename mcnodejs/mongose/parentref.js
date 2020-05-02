// Parent Refs

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/edx-course-db', { useMongoClient: true })

const Post = mongoose.model('Post', {
    name: String,
    url: String,
    text: String
})
const Comment = mongoose.model('Comment', {
    text: String,
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
})

let post = new Post({
    name: 'Top 10 ES6 Features every Web Developer must know',
    url: 'https://webapplog.com/es6',
    text: 'This essay will give you a quick introduction to ES6. If you donâ€™t know what is ES6, itâ€™s a new JavaScript implementation.'
})

post.save(function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Post is saved: ', post.toJSON())
    }
    let i = 0
    let ca = [{ text: 'Cruelâ€¦..var { house, mouse} = No type optimization at all' },
        { text: 'I think youâ€™re undervaluing the benefit of â€˜letâ€™ and â€˜constâ€™.' },
        { text: '(p1,p2)=>{ â€¦ } ,i understand this ,thank you !' }
    ].forEach((comment, index, list) => {
        comment.post = post._id
        const c = new Comment(comment)
        c.save((error, result) => {
            if (error) return console.error(error)
            i++
            if (i == list.length) {
                queryCommentWithPost()
            }
        })
    })
})

const queryCommentWithPost = () => {
    // Populate
    Comment
        .findOne({ text: /Cruel/i })
        .populate('post')
        .exec(function(err, comment) {
            if (err) return console.error(err)
            console.log('The comment is %s', comment)
            mongoose.disconnect()
        })
}