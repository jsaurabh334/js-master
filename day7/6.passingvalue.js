let arr = ['h', 'e'];
let arr1 = arr;
arr1.push('l');

console.log(arr); // ["h", "e", "l"]
console.log(arr1); // ["h", "e", "l"]

let array1 = ['h', 'e'];
array1.name = 'John';

console.log(array1); // ["h", "e"]
console.log(array1.name); // "John"
console.log(array1['name']); // "John"