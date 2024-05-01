const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/about', (req, res) => {
    res.send('Hello about!')
  })



  app.get('/index', (req, res) => {
    res.sendFile('public/index.html',{root:__dirname})
  })
  



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })