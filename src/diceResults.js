const returnDice = (dice) => {
  const randomNumber = Math.floor(Math.random()*dice.length)
  return dice[randomNumber];
}

module.exports = returnDice;