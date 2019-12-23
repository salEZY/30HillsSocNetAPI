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
    const idx = IdOfFriends[i] - 1
    if (users[idx].firstName !== user.firstName) {
      friendsOfFriends.push(`${users[idx].firstName} ${users[idx].surname}`)
    }
  }
  return friendsOfFriends
}

const getFriendSuggestions = (user, users) => {
  let suggestedFriends = []
  let IdOfFriends
  let network
  for (let i = 0; i < user.friends.length; i++) {
    const index = user.friends[i] - 1
    IdOfFriends = users[index].friends
  }
  for (let i = 0; i < IdOfFriends.length; i++) {
    const idx = IdOfFriends[i] - 1
    if (users[idx].id !== user.id) {
      network = IdOfFriends.concat(users[idx].friends)
    }
  }
  let combined = network.filter((el, idx, arr) => arr.indexOf(el) !== idx)
  if (combined.length < 2) {
    return 'No friend suggestions'
  } else {
    for (let i = 0; i < combined.length; i++) {
      const idx = combined[i] - 1
      suggestedFriends.push(`${users[idx].firstName} ${users[idx].surname}`)
    }
    return suggestedFriends
  }
}

module.exports = {
  getDirectFriends,
  getFriendsOfFriends,
  getFriendSuggestions
}
