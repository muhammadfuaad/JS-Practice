function createUser(username, score) {
  this.username = username
  this.score = score
}

createUser.prototype.increment = function() {
  score++
}

const user1 = createUser("chai")