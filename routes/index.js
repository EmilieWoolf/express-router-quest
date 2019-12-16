const express = require('express');
const posts = require('./posts');
const tags = require('./tags');
const router = express.Router();

router.use('/posts', posts);
router.use('/tags', tags)

module.exports = router;