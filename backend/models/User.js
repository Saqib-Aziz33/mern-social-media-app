const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'username is required']
    },
    avatar: {
        public_id: String,
        url: String
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: [true, 'Email already exists']
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minlength: [6, 'password must be atleast 6 characters'],
        select: false
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    resetPasswordToken: String,
    resetPasswordExpire: Date
})

module.exports = mongoose.model('User', userSchema)