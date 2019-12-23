const getDirectFriends = (user, users) => {
  let directFriends = []
  for (let i = 0; i < user.friends.length; i++) {
    const index = user.friends[i] - 1
    directFriends.push(`${users[index].firstName} ${users[index].surname}`)    
}
return directFriends
}

const getFriendsOfFriends = (user, users) => {
  let friendsOfFriends = []
  let IdOfFriends
  for (let i = 0; i < user.friends.length; i++) {
    const index = user.friends[i] - 1
    IdOfFriends = users[index].friends
  }
  for (let i = 0; i < IdOfFriends.length; i++) {
    const idx = IdOfFriends[i] -1
    if (users[idx].firstName != user.firstName) {
      friendsOfFriends.push(`${users[idx].firstName} ${users[idx].surname}`)
    }
  }
  return friendsOfFriends
}

const getFriendSuggestions = (user, users) => {
  let suggestedFriends = []
}

module.exports = {
  getDirectFriends,
  getFriendsOfFriends,
  getFriendSuggestions
}