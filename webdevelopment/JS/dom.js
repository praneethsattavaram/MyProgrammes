// console.log(window)
// console.dir(document)

// ACCESSING ELEMENTS

// DIRECT ACCESS
// console.log(document.all)
// console.log(document.head)
// console.log(document.title)
// console.log(document.body)
// // console.log(document.div)
// // console.log(document.p)
// console.log(document.images)
// console.log(document.links)
// console.log(document.forms)
// console.log(document.inputs) // cannot access inputs, h1 , div, p in direct access
// console.log(document.h1)

// INDIRECT ACCESS

// // 1)getElementsById
// let h1 = document.getElementById("heading1")
// console.dir(h1) 
// console.log(h1)

// h1.style.color = "crimson"
// h1.style.backgroundColor = "black"
// h1.style.border = "2px solid black"

// let passwordField = document.getElementById("password")
// console.dir(passwordField)
// passwordField.style.color = "white"
// passwordField.style.backgroundColor = "black"


// //  2)getElementsByClassName
// let images = document.getElementsByClassName("img")
// console.log(images)
// console.dir(images)

// for(let ele of images){
//     ele.style.border = "5px solid black"
// }

// let finalOutput = Array.from(images)
// finalOutput.forEach((ele) => {
//     ele.style.border = "5px solid green"
// })


// // 3)getElementsByTagName
// let anchor = document.getElementsByTagName("a")
// console.log(anchor)
// for(let ele of anchor){
//     ele.style.color = "orange"
//     ele.style.textDecoration = "none"
//     ele.style.fontSize = "30px"
// }


//  4)getElementsByName
// let input = document.getElementsByName("input") 
// for(let ele of input){
//     ele.style.color = "Yellow"
//     ele.style.background = "red"
// }

//  5)querySelector

// // id
// let allah = document.querySelector("#heading1")
// allah.style.color = "red"

// // class
// let kaikachi = document.querySelector(".img")
// kaikachi.style.border = "2px solid red"

// // tag
// let tammudu = document.querySelector("a")
// tammudu.style.color = "green"

// // attributeSelector
// let input1 = document.querySelector("[name=input]")
// input1.style.background = "purple"


//  6)querySelectorAll

// // id
// let allah = document.querySelectorAll("#heading1")
// console.log(allah)
// for(ele of allah){
//     ele.style.color = "red"
// }

// // class
// let kaikachi = document.querySelectorAll(".img")
// for(ele of kaikachi) {
//     ele.style.border = "2px solid red"
// }

// // tag
// let tammudu = document.querySelectorAll("a")
// for(ele of tammudu) {
//     ele.style.color = "green"
// }

// // attributeSelector
// let input1 = document.querySelectorAll("[name=input]")
// for(ele of input1) {
//     ele.style.background = "purple"
// }

// WRITING CONTENT ON USER INTERFACE

//write
// document.write("Hello from write method")
// document.write(`<div>
//     <h1>Heading</h1>
//     <p>Paragraph</p>
//     <button>Click</button>
//     </div>`
// )

// // writeln()
// document.writeln("Hello from writeln method")
// document.writeln("Hello from writeln method again")


// SETTING ATTRIBUTES
// let settingAttributes = () => {
//     let heading = document.querySelector("h1")

//     heading.setAttribute("one", "two")
//     heading.setAttribute("three", "four", "five", "six")
//     console.log(heading)
// }



// REMOVE ATTRIBUTE
// let removingAttributes = () => {
//     let h1 = document.querySelector("h1")
//     h1.removeAttribute("id")
//     h1.removeAttribute("rahul")
//     console.log(h1)
// }

// CLASSLIST
// let dealWithClass = () => {
//     let h1 = document.querySelector("h1")
//     // h1.classList.add("one", "two", "three")
//     // h1.classList.remove("two", "four")

//     h1.classList.toggle("something")
//     // console.log(h1.classList.contains("js"))
//     // console.log(h1.classList.length)
//     // console.log(h1.classList.item(2))
//     console.log(h1.classList)
// }


// // //  CREATE ELEMENT
// let h1 = document.createElement("h1")
// let p = document.createElement("p")
// let btn = document.createElement("button")
// console.log(h1)
// console.log(p)
// console.log(btn)

// // // CREATE TEXT NODE
// let h1Text = document.createTextNode("IM HEADING TAG")
// let pText = document.createTextNode("IM PARAGRAPH TAG")
// let btnText = document.createTextNode("CLICK")
// console.log(h1Text)
// console.log(pText)
// console.log(btnText)

// // CREATE COMMENT
// let comment = document.createComment("IM COMMENT FROM DOM")
// console.log(comment)

// // appendChild() and append()
// h1.appendChild(h1Text)
// p.appendChild(pText)
// btn.appendChild(btnText)

// h1.append(h1Text, pText, btnText)
// p.append(pText)
// btn.append(btnText)

// // DISPLAYING CONTENT ON UI
// let body = document.body
// console.log(body)
// body.append(h1,p,btn)

// // InsertBefore(elementPositionToBeChangedBeforeElement)
// let script = document.querySelector("script")
// body.insertBefore(h1,script)
// body.insertBefore(btn,p)

// //  CHILDREN AND CHILDNODES
// let bod = document.querySelector("body")
// console.log(bod.childNodes)
// console.log(bod.children[1])

// REPLACE CHILD   
let ul = document.querySelector("ul")
let willBeKidnappedSoon = ul.children[1]
let newElement = document.createElement("li")
newElement.innerText = "Raj"
let kidnapOperation = () => {
    ul.replaceChild(newElement, willBeKidnappedSoon)
}


// REMOVE CHILD
let killTheChild = () => {
    let childToBeKilled = ul.children[1]
    ul.removeChild(childToBeKilled)
}
