const express = require('express')
const PORT = process.env.PORT || 8080

const app = express()

app.get('/', (req, res) => {res.send('hello world')})
app.listen(PORT, () => console.log(`Hello, I am server on port ${PORT}`))