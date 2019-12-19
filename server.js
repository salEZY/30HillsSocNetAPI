const express = require('express')
const fs = require('fs')
const port = 8080

const app = express()

// Display all users
app.get('/', (req, res) => {
  fs.readFile('data.json', (err, data) => {
    if (err) throw err
    let users = JSON.parse(data)
    res.send(users)
  })
})

//Show one user
app.get('/:id', (req, res) => {
  const id = req.params.id
  fs.readFile('data.json', (err, data) => {
    if (err) throw err
    let user = JSON.parse(data)
    if(!user[id - 1]){
      res.redirect('/')
    }
    res.send(user[id - 1])
  })
})

app.listen(port, () => {
    console.log(`30Hills server started at port ${port}!`)
})