const express = require('express')
const router = express.Router()
// files
const {createPost, likeAndUnlikePost, deletePost, getPostOfFollowing,  updatePost, addOrUpdateComment, deleteComment} = require('../controllers/post')
const {isAuthenticated} = require('../middlewares/auth')

// upload a post
router.route('/post/upload')
    .post(isAuthenticated, createPost)

// read update delete a post
router.route('/post/:id')
    .get(isAuthenticated, likeAndUnlikePost)
    .put(isAuthenticated, updatePost)
    .delete(isAuthenticated, deletePost)

// get posts of following users
router.route('/posts')
    .get(isAuthenticated, getPostOfFollowing)


// add update or delete comment
router.route('/post/comment/:id')
    .put(isAuthenticated, addOrUpdateComment)
    .delete(isAuthenticated, deleteComment)

module.exports = router