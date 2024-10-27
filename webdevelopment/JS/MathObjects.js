// console.log(Math)

// // 1) PI()
// console.log(Math.PI)

// // 2) MAX()
// let maxValue = Math.max(10,4,6,80,55,33)
// console.log(maxValue) //80

// // 3) MIN()
// let minValue = Math.min(10,4,6,80,55,33)
// console.log(minValue) //4

// // 4) FLOOR()
// console.log(Math.floor(4.2)) //4
// console.log(Math.floor(3.999999)) //3
// console.log(Math.floor(3.0001)) //3
// console.log(Math.floor(-2.2)) //-3
// console.log(Math.floor(-3.7)) //-4

// // 5) CEIL()
// console.log(Math.ceil(4.2)) //5
// console.log(Math.ceil(3.99999)) //4
// console.log(Math.ceil(3.00001)) //4
// console.log(Math.ceil(-2.2)) //-2
// console.log(Math.ceil(-3.7)) //-3

// // 6) ROUND()
// console.log(Math.round(4.2)) //4
// console.log(Math.round(3.99999)) //4
// console.log(Math.round(3.00001)) //3
// console.log(Math.round(-2.2)) //-2
// console.log(Math.round(-3.7)) //-4

// // 7) ABS()
// console.log(Math.abs(-4)) //4
// console.log(Math.abs(-5.5)) //5.5
// console.log(Math.abs(7)) //7

// // 8) TRUNC()
// console.log(Math.trunc(-4.8986)) //-4
// console.log(Math.trunc(49.6894868)) //49
// console.log(Math.trunc(7)) //7

// // 9) SIGN()
// console.log(Math.sign(-5)) //-1
// console.log(Math.sign(5)) //1
// console.log(Math.sign(0)) //0
// console.log(Math.sign(-0)) //-0

// // 10) POW()
// console.log(Math.pow(2,3)) //8
// console.log(Math.pow(10,10)) //1000000000
// console.log(Math.pow(4,-2)) //0.0625

// // 11) SQRT()
// console.log(Math.sqrt(81)) //9
// console.log(Math.sqrt(25)) //5
// console.log(Math.sqrt(28)) //5.291502622129181
// console.log(Math.sqrt(-4)) //NaN

// // 12) CBRT()
// console.log(Math.cbrt(27)) //3
// console.log(Math.cbrt(8)) //2 
// console.log(Math.cbrt(28)) //3.0365889718756627
// console.log(Math.cbrt(-25)) //-2.924017738212866

// 13) RANDOM()
console.log(Math.random())
// $ generating numbers between 1 to 100
console.log(Math.trunc(Math.random()*100))

// 14) SIN(), COS(), TAN()
let convertedDegree = Math.PI/180
console.log(Math.sin(0)) //0
console.log(Math.sin(30*convertedDegree)) //0.4999999994
console.log(Math.sin(90*convertedDegree)) //1

console.log(Math.cos(0)) //1
console.log(Math.cos(30*convertedDegree)) //0.866025403784437
console.log(Math.round(Math.cos(90*convertedDegree))) //0

console.log(Math.tan(0)) //0
console.log(Math.tan(30*convertedDegree)) //0.5773502691896257
console.log(Math.round(Math.tan(90*convertedDegree))) //163312395315270