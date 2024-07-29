const express = require('express')
const connectToDB = require('./db/connect')
const routing = require('./routes/index.route')

const app = express()
const PORT = process.env.PORT || 3000

// set up
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
connectToDB()
routing(app)

app.listen(PORT, function() {
  console.log(`App is listening on port ${PORT} ...`)
})