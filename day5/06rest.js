// function myname(name, ...args) {
//   console.log(name, args[(0, 2)]);
// }
// myname("saurabh", "john", "vihul", "mee");

const myfunct = function (a, b, ...args) {
  console.log(` ${a} ${b} ${args[1]}`);
};
myfunct(2, 4, 5, 6, 7, 8);
