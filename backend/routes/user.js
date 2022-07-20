const express = require('express')
const router = express.Router()
// files
const {register, login, followUser, logout, updatePassword, updateProfile, deleteMyProfile, myProfile, getUserProfile, getAllUsers, forgotPassword, resetPassword} = require('../controllers/user')
const {isAuthenticated} = require('../middlewares/auth')

// register new user
router.route('/register').post(register)
// login
router.route('/login').post(login)
// logout
router.route('/logout').post(logout)
// follow and unfollow a user
router.route('/follow/:id').get(isAuthenticated, followUser)
// update password
router.route('/update/password').put(isAuthenticated, updatePassword)
// update profile
router.route('/update/profile').put(isAuthenticated, updateProfile)
// delete won profile
router.route('/delete/me').delete(isAuthenticated, deleteMyProfile)
// get own profile
router.route('/me').get(isAuthenticated, myProfile)
// get a single user
router.route('/user/:id').get(isAuthenticated, getUserProfile)
// get all users
router.route('/users').get(isAuthenticated, getAllUsers)
// forgot password
router.route('/forgot/password').post(forgotPassword)
// reset password token
router.route('/password/reset/:token').put(resetPassword)



module.exports = router