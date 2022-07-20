const Post = require('../models/Post')
const User = require('../models/User')


// create a new post
exports.createPost = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


// delete a post
exports.deletePost = async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}


// like and unlike post
exports.likeAndUnlikePost = async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}


exports.getPostOfFollowing = async (req, res) => {
    try {
        res.status(200).json({success: true, posts})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}



exports.updatePost = async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}



exports.addOrUpdateComment = async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}



exports.deleteComment = async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}