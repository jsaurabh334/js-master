// // adding values in multi dimen array


// let studentsData = [  ['Jack', 24]  , ['Sara', 23],];
// studentsData.push(['Peter', 24]);

// console.log(studentsData); //[["Jack", 24], ["Sara", 23], ["Peter", 24]



// // using index notation
// let studentsData = [['Jack', 24], ['Sara', 23],];
// studentsData[1][2] = 'hello';

// console.log(studentsData); // [["Jack", 24], ["Sara", 23, "hello"]]

// for specific index we use splice() method

let studentsData = [['Jack', 24], ['Sara', 23],];

// adding element at 1 index
studentsData.splice(1, 0, ['Peter', 24]);

console.log(studentsData); // [["Jack", 24], ["Peter", 24], ["Sara", 23]]
