/*In programming, type conversion is the process of converting data of one type to another. For example: converting String data to Number.

There are two types of type conversion in JavaScript.

    Implicit Conversion - automatic type conversion
    Explicit Conversion - manual type conversion
 */
// Implicit conversion numeric string used with + gives string type
let result;

result = '3' + 2;  //operator (+) operand("3",2)
console.log(result) // "32"

result = '3' + true; 
console.log(result); // "3true"

result = '3' + undefined; 
console.log(result); // "3undefined"

result = '3' + null; 
console.log(result); // "3null"

// explicit conversion



// string to number
result = Number('324');
console.log(result); // 324

result = Number('324e-1')  
console.log(result); // 32.4

// boolean to number
result = Number(true);
console.log(result); // 1

result = Number(false);
console.log(result); // 0

result = Number(null);
console.log(result);  // 0

 result = Number(' ')
console.log(result);  // 0

result = Number('hello');
console.log(result); // NaN

result = Number(undefined);
console.log(result); // NaN

result = Number(NaN);
console.log(result); // NaN

result = parseInt('20.01');
console.log(result); // 20

result = parseFloat('20.01');
console.log(result); // 20.01

result = +'20.01';
console.log(result); // 20.01

result = Math.floor('20.01');
console.log(result); // 20

//number to string

result = String(324);
console.log(result);  // "324"

result = String(2 + 4);
console.log(result); // "6"

//other data types to string
result = String(null);
console.log(result); // "null"

result = String(undefined);
console.log(result); // "undefined"

result = String(NaN);
console.log(result); // "NaN"

result = String(true);
console.log(result); // "true"

result = String(false);
console.log(result); // "false"

// using toString()
result = (324).toString();
console.log(result); // "324"

result = true.toString();
console.log(result); // "true"


