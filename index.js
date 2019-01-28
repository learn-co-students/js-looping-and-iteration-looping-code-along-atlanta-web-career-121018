// Code your solutions in this file
function printBadges(employees) {
  for (let i = 0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i+1}.`);
  }
  return employees;
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
