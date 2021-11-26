require('dotenv').config()
const routes = require('./routes/index')
const mongoose = require('mongoose')

const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(cookieParser())

//routes
app.use('/api', routes.authRouter)

const URI = process.env.MONGO_URL
mongoose.connect(URI, {
    useNewUrlParser: true
}, (err) => {
    if(err) throw err
    console.log('mongo connected')
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('Server is running on port:', port)
})
