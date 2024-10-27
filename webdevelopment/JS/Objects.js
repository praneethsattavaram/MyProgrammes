// 1) LITERAL WAY

// let obj1 = {
//     name : "XYZ",
//     age : 25,
//     employee : true,
//     skills : ["HTML", "CSS", "JS"],
//     fun:() => {
//         console.log("first")
//     }
// }
// console.log(obj1)

// // 2) CONSTRUCTOR OBJECT 
// let obj2 = new Object ()
// obj2.name = "ABC"
// obj2.age = 25
// obj2.employee = true
// obj2.skills = ["react", "js"]
// obj2.fun=() => console.log("first")
// console.log(obj2)


// // ACCESSING THE PROPERTIES OF AN OBJECT 
// let obj1 = {
//     name : "XYZ",
//     age : 25,
//     employee : true,
//     skills : ["HTML", "CSS", "JS"],
//     fun:() => {
//         console.log("first")
//     }
// }
// console.log(obj1)

// // DOT NOTATION
// console.log(obj1.name) // XYZ
// console.log(obj1.age) // 25
// console.log(obj1.skills) // ["HTML", "CSS", "JS"] 
// console.log(obj1.skills[1]) // CSS
// obj1.fun() // first

// // OBJECT NOTATION 
// console.log(obj1["name"]) // XYZ
// console.log(obj1[name]) // undefined
// console.log(obj1["age"]) //25
// console.log(obj1["skills"]) // ["HTML", "CSS", "JS"]
// console.log(obj1["skills[1]"]) // Invalid Character
// obj1["fun()"] // Invalid Character


// DEALING WIHT CONST KEYWORD

// ARRAY
const arr = ["HTML", "CSS", "JS"] 
arr[1] = "react" // POSSIBLE
arr[1,2,3,4] // NOT POSSIBLE

// OBJECT

const obj = {
    name : "ABC",
    age : 23
}
obj.age = 40 // POSSIBLE
obj = {
    place : "HYD"
} // NOT POSSIBLE