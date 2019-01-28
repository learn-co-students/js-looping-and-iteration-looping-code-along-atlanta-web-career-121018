// Code your solutions in this file


function printBadges(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Welcome ${arr[i]}! You are employee #${i + 1}.`)
    }
    return arr;
};
printBadges(['Ada', 'Brendan', 'Ali']);
// LOG: Welcome Ada! You are employee #1.
// LOG: Welcome Brendan! You are employee #2.
// LOG: Welcome Ali! You are employee #3.
// => ["Ada", "Brendan", "Ali"]

function tailsNeverFails() {
    let counter = 0;
    while (maybeTrue()) {
        counter++;
    };

    function maybeTrue() {
        return Math.random() >= 0.5;
    };
    return `You got ${counter} tails in a row!`;
};
// tailsNeverFails();
// tailsNeverFails();
// tailsNeverFails();








//
