const getDirectFriends = (friends, users) => {
  let directFriends = []
  for (let i = 0; i < friends.length; i++) {
    const index = friends[i] - 1
    directFriends.push(`${users[index].firstName} ${users[index].surname}`)    
}
return directFriends
}

const getFriendsOfFriends = (friends, users) => {
  let friendsOfFriends = []
  let IdOfFriends
  for (let i = 0; i < friends.length; i++) {
    const index = friends[i] - 1
    IdOfFriends = users[index].friends
  }
  for (let i = 0; i < IdOfFriends.length; i++) {
    const idx = IdOfFriends[i] -1
    friendsOfFriends.push(`${users[idx].firstName} ${users[idx].surname}`)
  }
  return friendsOfFriends
}

const getFriendSuggestions = () => {
  let suggestedFriends = []
}

module.exports = {
  getDirectFriends,
  getFriendsOfFriends,
  getFriendSuggestions
}