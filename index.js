const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

app.get('/ping', (_, res) => res.send('Server is running'))

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
  mongoose.connect('mongodb://localhost/ren', () => {
    console.log('Connected to MongoDB')
  })
})
