let str = "Thursday"
let arr = ["Html", "CSS", "js", "react"]

let obj = {
    name : "Abc",
    age : 25
}

// for-in
console.log(str)
for (let val1 in str){
    console.log(val1)
    console.log(str[val1])
}

// Arrays
console.log(arr)
for(let val2 in arr){
    console.log(val2)
    console.log(arr[val2])
}

// Objects
console.log(obj)
for(let val3 in obj){
    console.log(val3)
    console.log(obj[val3])
}