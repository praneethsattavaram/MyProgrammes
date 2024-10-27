//! PASSING EXTRA PARAMETERS

// function something(a,b,c){
//     console.log(a+b+c)
// }
// something(10,20)


//! PASSING EXTRA ARGUMENTS

// function anything(a){
//     console.log(a)
// }
// anything(10,20)

//! FUNCTION EXPRESSION

// 1) ANONYMOUS FUNCTION

// let hello = function(){
//     console.log("I AM ANONYMOUS FUNCTION")
// }
// hello()

// 2) ARRAY FUNCTION

// const bye = () => {
//     console.log("I AM ARROW FUNCTION")
// }
// bye()

// EXPLICIT RETURN ARROW FUNCTION

// let explicit = (a,b) => {
//     return a+b;
// }
// console.log(explicit(2,3))

// IMPLICIT RETURN ARROW FUNCTION

// let implicit1 = (a, b) => a+b
// console.log(implicit1(2,3))

// let implicit2 = () => console.log("HELLO")
// implicit2()

// BEHAVIOUR OF ARROW FUNCTION

// SINGLE PARAMETER 

// let hello = val => console.log(val)
// hello("say hello")

// NO PARAMETER

// let situation = _ => console.log("Rahul is angry")
// situation()

// IIFE

// (function hello(){
//     console.log("IIFE1")
// }) ()

// (function(){
//     console.log("IIFE2")
// }) ()

// (() => {
//     console.log("IIFE3")
// })()

// (hello => {
//     console.log("IIFE4")
// }) ()

// HIGHER ORDER FUNCTIONS

// let add = (a,b) =>
//      a+b

// let sub = (a,b) => {
//     return a-b
// }

// let hof = (task,a,b) => {
//     return task(a,b)
// }

// console.log(hof(add,10,30))
// console.log(hof(sub,30,10))

//FUNCTIONS
//EXAMPLE 1
welcome() // WELCOME
function welcome() {
	console.log("WELCOME")
}

//EXAMPLE2
greet() //  ReferenceError:  Cannot access ‘greet’ before initialisation  
let greet = () => {
    	console.log("GOOD MORNING")
}

//EXAMPLE3
// () // SyntaxError: Unexpected token ‘}’
(() => {
	console.log("Hello")
})