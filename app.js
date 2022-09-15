require('dotenv').config()

const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.static('./public'))

app.use('/user', require('./src/routes/user.route'))
// app.use('/location', require('./src/routes/location.route'))

const port = process.env.port || 8080
app.listen(port, console.log(`App listining in port ${port} - http://localhost:${port}`))