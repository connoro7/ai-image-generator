const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000

const app = express()

// Request body parser
app.use(express.json())
// When testing with HTTP/API client, be sure to use "Form URL-Encoded" instead of "JSON" in body payload
app.use(express.urlencoded({ extended: false }))

// Middleware to serve static files on frontend
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/openai', require('./routes/openaiRoutes'))

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
 
