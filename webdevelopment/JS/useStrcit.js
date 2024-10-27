// Example 1
// "use strict"
// a = 10
// console.log(a) // Uncaught ReferenceError: a is not defined

// Example 2

// "use strict"
// function add(a,b,b) {
//     console.log(a+b+b) //Uncaught SyntaxError: Duplicate parameter name not allowed in this context
// }
// add(10,20,30)

// Example 3

// function add1(a,b,b) {
//     console.log(a+b+b)
// }
// add1(10,20,30) // Output : 70 --> b takes the latest value i.e 30 