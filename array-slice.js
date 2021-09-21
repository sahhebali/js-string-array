/* slice */
const number = [3, 4, 5, 10, 12, 13, 14, 15, 19, 21, 26, 238,];
const numberSlice = number.slice(1, 5);
// console.log(numberSlice);
// console.log(number);

/* splice */
const numbers = [12, 10, 19, 20, 25, 18, 40, 50];
const numberSplice = numbers.splice(5, 1, 777, 888, 999);
console.log(numberSplice);
console.log(numbers);

