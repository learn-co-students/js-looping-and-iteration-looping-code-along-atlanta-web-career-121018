// Code your solutions in this file
function printBadges(names) {
  for (var i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`)
  }
  return names
}

function tailsNeverFails() {
  function coinFlipTails() {
    return Math.random() >= 0.5
  }

  let tailsFlips = 0

  while (coinFlipTails()) {
    tailsFlips++
  }

  return `You got ${tailsFlips} tails in a row!`
}
