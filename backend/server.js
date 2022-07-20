const app = require('./app')

// routes
const postRouter = require('./routes/post')
const userRouter = require('./routes/user')

app.use('/api/v1', postRouter)
app.use('/api/v1', userRouter)

app.listen(process.env.PORT, () => {
    console.log('server connected at', process.env.PORT)
})