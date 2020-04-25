const Post = require('../models/post');
exports.getPosts = (req, res) => {
    const post = Post.find().select("_id title body")
        .then(post => {
            res.status(200).json({ post: post });
        })
        .catch(err => console.log(err));
};

exports.createPosts = (req, res) => {
    const post = new Post(req.body);
    /* post.save((err, result) => {
         if (err) {
             return res.status(400).json({
                 error: err
             });
         }
         res.status(200).json({
             post: result
         });
     });
     */
    post.save().then(result => {
        res.status(200).json({
            post: result
        })
    });
};