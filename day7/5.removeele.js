let myArray = ['work', 'eat', 'sleep', 'exercise'];

// remove the last element
myArray.pop();
console.log(myArray); // ['work', 'eat', 'sleep']

// remove the last element from ['work', 'eat', 'sleep']
const removedElement = myArray.pop();

//get removed element
console.log(removedElement); // 'sleep'
console.log(myArray);  // ['work', 'eat']