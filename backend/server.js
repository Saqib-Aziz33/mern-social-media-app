const app = require('./app')


app.listen(process.env.PORT, () => {
    console.log('server connected at', process.env.PORT)
})