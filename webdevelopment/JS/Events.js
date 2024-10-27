// CLICKEVENT

// //  1stway
// let clickEvent = () => {
//     console.log("FIRST BUTTON IS CLICKED")
// }

// // 2ndWay
// let btn = document.querySelector("#btn")
// btn.onclick = () => {
//     console.log("SECOND BUTTON WAS CLICKED")
// }

// // 3rdWay
// let btn3 = document.querySelector("#btn3")
// btn3.addEventListener("click", () => {
//     console.log("THIRED BUTTON WAS CLICKED")
// })

// DOUBLE CLICK EVENT
// let btn = document.querySelector("#dbl")
// let h1 = document.querySelector("h1")
// btn.addEventListener("dblclick", () => {
//     h1.style.color = "white"
//     h1.style.background = "black"
// })

// MOUSEENTER AND MOUSELEAVE
// let para = document.querySelector("p")
// para.addEventListener("mouseenter", () => {
//     para.style.color = "yellow"
//     para.style.background = "green"
//     para.style.textTransform = "uppercase"
// })

// para.addEventListener("mouseleave", () => {
//     para.style.color = "white"
//     para.style.background = "black"
//     para.style.textTransform = "lowercase"
// })

// INPUT
// let textField = document.querySelector("[type]")
// let body = document.body             
// textField.addEventListener("input", () => {
//     let red = Math.round(Math.random()* 255)
//     let green = Math.round(Math.random()* 255)
//     let blue = Math.round(Math.random()* 255)
//     let finalColorValue = `rgb(${red},${green},${blue})`
//     body.style.background = finalColorValue
// })

// CHANGE
// let inputField = document.querySelector("input")
// inputField.addEventListener("change", () => {
//     body.style.background= "red"
// }


//  EXPRESS KEYUP AND KEYDOWN
let input = document.querySelector("input")
input.addEventListener("keypress", (e) => {
    console.log("KEY IS PRESSED")
    console.log(e.key)
    console.log(e.keyCode)
})

input.addEventListener("keyup", () => {
    console.log("key released")
})

input.addEventListener("keydown", () => {
    console.log("key is down")
})