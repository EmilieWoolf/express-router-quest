const express = require('express');
const fakePosts = require('../data/posts');
const comments = require('./comments');

const router = express.Router({mergeParams: true});

// Get a list of posts
router.get('/', (req, res) => {
    const tagId = Number(req.params.tagId)
    const tagPosts = fakePosts.filter(post => post.tag_ids.includes(tagId))
    res.json(tagPosts);
  });
  
// Get a single post
router.get('/:postId', (req, res) => {
    // Find the post in the array that has the id given by req.params.id
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    const postId = Number(req.params.postId);
    const foundPost = fakePosts.find((post) => post.id === postId);
    if (!foundPost) {
      return res.status(404).json({
        error: 'Post not found',
      });
    }
    return res.json(foundPost);
  });

router.use('/:postId/comments', comments);


module.exports = router;