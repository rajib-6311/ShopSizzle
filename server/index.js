const express = require('express')
const { default: dbConnection } = require('./config/mongodb.js')
const { default: userRouter } = require('./routes/userRouter.js')
require('dotenv').config()
const app = express()


const port = process.env.PORT || 8000

// MongoDB connection 
dbConnection()

app.get('/', (req, res) => {
  res.send('Server is running!')
})

app.use('/api/user', userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})