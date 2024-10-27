// // ACCESSING ARRAY ELEMENTS 

// let subjects = ["Html", "Css", "JS", "Python", "Java"]
// console.log(subjects[0])
// console.log(subjects[3])

// console.log(subjects[10])
// console.log(subjects[-1])

// console.log(subjects.length)
// console.log(subjects[subjects.length-3])

// // METHODS TO ADD OR DELETE THE ELEMENTS EITHER STARTING OR ENDING OF AN ARRAY

// // 1)PUSH
// let arr = ["SAMOSA", "PANI PURI", "PASTA", "BHEL PURI"]
// arr.push("MAGGI", "MASKA BUN")
// console.log(arr)

// // 2)pop()
// arr.pop()
// console.log(arr)

// // 3) Unshift
// arr.unshift("first", "second")
// console.log(arr)

// // 4) Shift
// arr.shift()
// console.log(arr)

// // MULTI-DIMENSIONAL / NESTED ARRAY
// let details = [
//     ["ABC", "abc@gmail.com", 10000],
//     ["XYZ", "xyz@gmail.com", 20000]
// ]
// console.log(details[0][2])
// console.log(details[1][1])

// // ARRAY METHODS

// 1) toString()
// let arr1 = ["Html", "css", "JS", "Python", "Java"]
// console.log(arr1)
// console.log(typeof arr1)
// console.log(arr1.toString())
// console.log(typeof arr1.toString())

// // 2) concat()
// let arr2 = ["React", "Angular"]
// let arr3 = ["Node", "Vue"]
// console.log(arr2.concat(arr3,arr1))
// console.log(arr1.concat("Flutter"))

// // 3) join()
// let arr3 = ["a", "b", "c"]
// console.log(arr3.join("*"))
// console.log(arr3.join("😆"))

// // 4) at()
// let arr4 = ["html", "css", "js", "react"]
// console.log(arr4.at(1))
// console.log(arr4.at(3))
// console.log(arr4.at(10))
// console.log(arr4.at(-1))

// // 5) flat()
// let arr5 = [1,2,3,[4,[5,[6,7]]]]
// console.log(arr5.flat())
// console.log(arr5.flat(1))
// console.log(arr5.flat(2))
// console.log(arr5.flat(Infinity))

// // 6) delete()
// let arr6 = ["java", "jdbc", "spring", "hibernate"]
// delete arr6[2]
// console.log(arr6)
// console.log(arr6[2])

// // 7) isArray()
// let arr7 = "HELLO"
// let arr8 = [1,2,3]
// let arr9 = new Array("python", 'django')
// console.log(Array.isArray(arr7))
// console.log(Array.isArray(arr8))
// console.log(Array.isArray(arr9))

// // 8) reverse()
// let arr8 = ["jspiders", "qspiders", "pyspiders"]
// console.log(arr8.reverse())

// // 9) sort()
// let arr9 = [9,5,7,2,1]
// console.log(arr9.sort()) // [1, 2, 5, 7, 9] 

// let arr10 = [100,52,1000,1,200]
// console.log(arr10.sort()) // [1, 100, 1000, 200, 52]

// // 10) slice()
// let arr10 = ["java", "python", "web", "sql", "mongodb"]
// console.log(arr10.slice(0))
// console.log(arr10.slice(0,2))
// console.log(arr10.slice(-1,1)) //[]
// console.log(arr10.slice(-3,-1))
// console.log(arr10.slice(-1,-3)) //[]
// console.log(arr10.slice(4,2)) //[]
// console.log(arr10.slice(1,1)) //[]

// 11) splice()
// let arr11 = ["Hyderabad", "Banglore", "Delhi", "Pune", "Chennai"]
// console.log(arr11)
// arr11.splice(2,1,"Gujarat")
// console.log(arr11) // ["Hyderabad", "Banglore", "Gujarat", "Pune", "Chennai"]

// arr11.splice(1,3,"Mumbai")
// console.log(arr11) // ["Hyderabad", "Mumbai", "Chennai]

// arr11.splice(1,0, "Manglore", "Hampi")
// console.log(arr11) // ["Hyderabad", "Manglore", "Hampi", "Banglore", "Delhi", "Pune", "Chennai"]

// arr11.splice(-3,2)
// console.log(arr11) // ["Hyderabad", "Banglore", "Chennai"]

// // 12) indexOf(searchElement, Index)
// let arr12 = ["Sun", "Mon", "Tue", "Wed", "Mon"]
// console.log(arr12.indexOf("Sun")) //0
// console.log(arr12.indexOf("Thursday")) //-1
// console.log(arr12.indexOf("Mon")) //1
// console.log(arr12.indexOf("Sun", 1)) //-1
// console.log(arr12.indexOf("Mon", 2)) //4
// console.log(arr12.indexOf("Mon", -3)) //4

// // 13) lastIndexOf(searchElement, Index)
// let arr13 = ["Sun", "Mon", "Tue", "Wed", "Mon"]
// console.log(arr13.indexOf("Sun")) //0
// console.log(arr13.indexOf("Thursday")) //-1
// console.log(arr13.indexOf("Mon")) //4
// console.log(arr13.indexOf("Sun", 1)) //0
// console.log(arr13.indexOf("Mon", 2)) //1
// console.log(arr13.indexOf("Mon", -3)) //1

// // 14) includes(searchElement, index):
// let arr14 = ["one", "two", "three", "four"]
// console.log(arr14.includes("two")) //true
// console.log(arr14.includes("five")) //false
// console.log(arr14.includes("two", 2)) //false
// console.log(arr14.includes("two", -1)) //false
// console.log(arr14.includes("two", -4)) //true

