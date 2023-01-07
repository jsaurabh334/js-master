// let studentsData = [['Jack', 24], ['Sara', 23],];

// // removing 1 index array item
// studentsData.splice(1,1);
// console.log(studentsData); // [["Jack", 24]]



// remove the element from the inner array
let studentsData = [['Jack', 24], ['Sara', 23]];
studentsData[1].pop();


console.log(studentsData); // [["Jack", 24], ["Sara"]]