require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const legalRoutes = require('./routes/legalRoutes')

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/legal/',legalRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
        console.log('Connected to DB & Listening on Port ', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })