// Child Refs

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/edx-course-db', { useMongoClient: true })

const Post = mongoose.model('Post', {
    name: String,
    url: String,
    text: String,
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
})
const Comment = mongoose.model('Comment', {
    text: String
})
let ca = [{ text: 'Cruelâ€¦..var { house, mouse} = No type optimization at all' },
    { text: 'I think youâ€™re undervaluing the benefit of â€˜letâ€™ and â€˜constâ€™.' },
    { text: '(p1,p2)=>{ â€¦ } ,i understand this ,thank you !' }
].map((comment) => {
    const c = new Comment(comment)
    c.save()
    return c._id
})
console.log(ca)

var post = new Post({
    name: 'Top 10 ES6 Features every Web Developer must know',
    url: 'https://webapplog.com/es6',
    text: 'This essay will give you a quick introduction to ES6. If you donâ€™t know what is ES6, itâ€™s a new JavaScript implementation.',
    comments: ca
})

post.save(function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log('The post is saved: ', post.toJSON())
    }
    // Populate
    Post.
    findOne({ name: /Top 10 ES6/i }).
    populate('comments').
    exec(function(err, post) {
        if (err) return console.error(err)
        console.log('The post is %s', post)
        mongoose.disconnect()
    })
})