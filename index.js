require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sanket', (req, res) => {
    res.send('Hello Sanket!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please Login First</h1>')
})
app.listen(process.env.PORT, () => {  console.log(`Example app listening on port ${process.env.PORT}`)
})
