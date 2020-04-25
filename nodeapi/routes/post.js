const express = require('express');
const postController = require('../controller/post');
const validator = require('../validator/index')
const router = express.Router();
router.get('/', postController.getPosts);
router.post('/post', validator.createPostValidator, postController.createPosts);

module.exports = router;