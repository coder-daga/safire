const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries')
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/message/:flag', db.getMessageByFlag)
app.post('/admin', db.createMessage)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

