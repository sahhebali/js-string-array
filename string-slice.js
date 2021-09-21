const anthem = 'Amar sonar Bangla Ami tomay Valobasi'
/* split */
const word = anthem.split(' ');
const withoutA = anthem.split('a')
// console.log(withoutA);

/* slice */
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

/* substr */
const another = anthem.substr(5, 9);
// console.log(another);

/* substring  */
const anotheranther = anthem.substring(11, 17)
// console.log(anotheranther)

/* concat */
const first = 'amader';
const second = 'city';
const fullcity = first.concat(second).concat('abcd');
// console.log(fullcity);

/* join */
const word2 = ['alim', 'halim', 'falim', 'jokhiom']
// const allJoined = word2.join('');
// const allJoined = word2.join(' ');
const allJoined = word2.join(', ');

console.log(allJoined);