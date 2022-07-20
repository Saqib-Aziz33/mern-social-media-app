const User = require('../models/User')
// const jwt = require('jsonwebtoken')

exports.isAuthenticated = async (req, res, next) => {
    try { 
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}