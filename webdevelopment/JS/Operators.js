// // ARITHMETIC OPERATOR(+, -, *, /, %)

// //*ADDITION 
// console.log(2+3)
// console.log(2+"4")
// console.log(2+true)
// console.log(2+false)
// console.log(2+"4"+true)
// console.log(2+ +"2")
// console.log(typeof +"2")

// //*SUBTRACTION
// console.log(2-3)
// console.log(2-"4")
// console.log(2-true)
// console.log(2-false)
// console.log(2-"4"+true)
// console.log(2- -"2")
// console.log(typeof -"2")

// //*MULTIPLICATION
// console.log(2*3)
// console.log(2*"4")
// console.log(2*true)
// console.log(2*false)
// console.log(2*"4"+true)
// console.log(2* -"2")

// //*DIVISION 
// console.log(6/3)
// console.log(8/"4")
// console.log(2/true)
// console.log(2/false)
// console.log(4/"2"+true)
// console.log(4/ -"2")
// console.log(4/"abc")

// //*MODULUS
// console.log(6%3)
// console.log(8%"4")
// console.log(2%true)
// console.log(2%false)
// console.log(8%"abc")

// COMPARISON (OR) RELATIONAL OPERATOR (>, <, >=, <=, !=, ==, ===)
// let a = 1;
// let b = 2;
// let c = "1";
// console.log(a > b) //false 
// console.log(a < b) //true
// console.log(a > c) //false
// console.log(a >= c) //true
// console.log(a <= c) //true 
// console.log(a != b) //true 
// console.log(a != c) //false
// console.log(a == c) //true
// console.log(a == b) //false
// console.log(a === c) //true

// LOGICAL OPERATOR (&&, ||, !)
// let a = 10;
// let b = 30;
// let c = "10";
// let d = 5;
// console.log(a > d && b > a && d <= a) //true
// console.log(a == c && a === c) //false
// console.log(a < c || a <= d || a === c) //false
// console.log(a === c && c > a || b >= d) //true
// console.log(!(a === c)) //true

// ASSIGNMENT OPERATOR (=, +=, -=, *=, /=, %=)
let a = 10;
let b = 20;
let c = "30";

// +=
// console.log(a+=b) //30
// console.log(a+=c) //3030
// console.log(a+=true) //3030true
// console.log(a+=false) //3030truefalse

// -=
// console.log(a-=b) //-10
// console.log(a-=c) //-40
// console.log(a-=true) //-41
// console.log(a-=false) //-41

// *=
// console.log(a*=b) //200
// console.log(a*=c) //6000
// console.log(a*=true) //6000
// console.log(a*=false) //0

// /=
// console.log(a/=b) //0.5
// console.log(a/=c) //0.0166666
// console.log(a/=true) //0.16666
// console.log(a/=false) //Infinity

// %=
// console.log(a%=b) //10
// console.log(a%=c) //10
// console.log(a%=true) //0
// console.log(a%=false) //NaN

// CONDITIONAL / TERNARY OPERATOR
let comeToClass = false 
let result = comeToClass?"You are safe": "I will push you out of the window"
console.log(result)

let proposalAcceptance = false
let output = proposalAcceptance? "WHEN SHALL WE MARRY?":"dONT WORRY I WILL FIND ANOTHER GIRL"
console.log(output)