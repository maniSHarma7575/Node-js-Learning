exports.getPosts = (req, res) => {
    res.json({
        "posts": [{
                "title": "First posts"
            },
            {
                "title": "second posts"
            }
        ]
    });
};