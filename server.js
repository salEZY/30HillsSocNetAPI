const express = require('express')
const fs = require('fs')
const{ getDirectFriends, getFriendsOfFriends, getFriendSuggestions } = require('./helper')
const port = 8080

const app = express()

// Display all users
app.get('/', async (req, res) => {
  await fs.readFile('data.json', (err, data) => {
    if (err) throw err
    let users = JSON.parse(data)
    res.send(users)
  })
})

//Show one user
app.get('/:id', async (req, res) => {
  const id = req.params.id
  await fs.readFile('data.json', (err, data) => {
    if (err) throw err
    let users = JSON.parse(data)
    if(!users[id - 1]){
      res.redirect('/')
    }
    
    const user = users[id - 1]
   
    const userObj = {
      'first name': user.firstName,
      'surname': user.surname,
      'age': user.age,
      'gender': user.gender,
      'Direct friends': getDirectFriends(user.friends, users),
      'Friends of friends': getFriendsOfFriends(user.friends, users),
      'Friend suggestions': getFriendSuggestions(user, users) || null
    }
    res.json(userObj)
  })
})

app.listen(port, () => {
    console.log(`30Hills server started at port ${port}!`)
})