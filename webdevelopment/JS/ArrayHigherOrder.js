//  ARRAY HIGHER ORDER METHODS 

// //  1) forEach()
// let arr1 = ["html", "css", "js", "react"]
// // EXAMPLE1
// arr1.forEach((element, index, array) => {
//     console.log(element)
//     console.log(index)
//     console.log(array)
// })
// // EXAMPLE2
// let output1 = arr1.forEach((ele) => {
//     return ele 
// })
// console.log(output1)



// // 2) map()
// let arr2 = ["jan", "feb", "mar", "apr"]
// // EXAMPLE1
// arr2.map((element, index, array) => {
//     console.log(element)
//     console.log(index)
//     console.log(array)
// })
// // EXAMPLE2
// let output2 = arr2.map((element)=>{
//     return element
// })
// console.log(output2)
// EXAMPLE3
// let arr3 = [1,2,3,4,5,6,7,8,9,10]
// let findMultiple = (a)=>{
//     arr3.forEach((val) => {
//         console.log(`${a} * ${val} = ${a*val}`)
//     })
// }
// findMultiple(3)



// // 3) filter()
// let arr3 = [10,2,5,7,4]
// let output3 = arr3.filter((element) => {
//     return element > 5
// })
// console.log(output3)

// // 4) some()
// let arr4 = [20,30,10,50,70]
// let output4 = arr4.some((element) => {
//     return element > 30
// })
// console.log(output4)

// // 5) every()
// let arr5 = [20,30,10,50,70]
// let output5 = arr5.every((element) => {
//     return element > 30
// })
// console.log(output5)

// // 6) reduce()
// let arr6 = [1,2,3,4,5]
// let output6 = arr6.reduce((sum, element, index, array) => {
//     return sum+= element
// },0)
// console.log(output6) //15

// let arr = [1,2,3,4,5]
// let output = arr.reduce((sum, element, index, array) => {
//     return sum+= element
// },"HTML")
// console.log(output) // HTML12345

