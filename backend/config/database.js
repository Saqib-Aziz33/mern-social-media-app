const mongoose = require('mongoose')

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/mern-social-media'

function connectDatabase(){
    mongoose.connect(dbUrl)
        .then(con => console.log('database connected', con.connection.host))
        .catch(err => console.log('database connection error'));
}

module.exports = connectDatabase