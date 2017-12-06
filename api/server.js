// Bring in our environment variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express');
const bodyParser = require('body-parser');

const app = express()

// Plugins
app.use(bodyParser.json()); // Allows me to have JSON uploads (POST/PUT)

// JSON error handling
app.use((error, req, res, next) => {
  res.send({ error: error.message })
})

app.use((req, res, next) => {
  // No other routhes left, must be a 404!
  res.status(404).send({
    error: `no route found for ${ req.method } ${ req.url }` })
})

// Routes
app.listen(7000, (error) => {
  if (error) {
    console.log('There was and problem starting the server', error)
  } else {
  console.log('Server is running on port http://localhost:7000')
  }
})
