const number = [6, 4, 7, 1, 3, 8, 9, 2, 5];
const shortdeNumber = number.sort()
// console.log(shortdeNumber);
const friend = ['abul', 'kabul', 'dablu', 'nablu', 'eela', 'hasim', 'babul'];
// const shortFriend = friend.sort();
// console.log(shortFriend);
// const sortRevers = friend.reverse();
// console.log(sortRevers);

// const sortedreverse = friend.sort().reverse();
// console.log(friend);
const bigNumbers = [80, 45, 66, 90, 48, 84, 83, 95, 100, 250];
const sortBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
})
console.log(sortBigNumbers);
