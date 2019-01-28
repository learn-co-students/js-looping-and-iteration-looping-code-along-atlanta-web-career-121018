// Code your solutions in this file
function printBadges(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(`Welcome ${names[i]}! You are employee #${[i+1]}.`);
    }
    return names;
}

function tailsNeverFails(){
    tailsCount = 0;
    coinFlip = Math.random();
    while (coinFlip >= 0.5) {
      tailsCount += 1;
      coinFlip = Math.random();
    }
    return `You got ${tailsCount} tails in a row!`
  }