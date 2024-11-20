// import { useState } from "react"

// let State =() => {

//     let[count, setCount] = useState(0)
//     console.log(count)

//     let handleIncrement = () => {
//         setCount(count+1)
//     }    

//     let handleDecrement = () => {
//         setCount(count-1)
//     }

//     let handleReset = () => {
//         setCount(0)
//     }

//     return   <>
//         <h1>{count}</h1>
//         <button onClick={handleIncrement}>+</button>
//         <button onClick={handleDecrement}>-</button>
//         <button onClick={handleReset}>Reset</button>
//         </>
    
// }
// export default State


// 2) EXAMPLE 3

// import { useState } from "react"

// let State = () => {
    
//     let [name, setName] = useState("")
//     // console.log(name)
//     let [place, setPlace] = useState("")
//     // console.log(place)
//     let [age, setAge] = useState()
//     // console.log(age)

//     let handleName =() => {
//         setName("sachin")
//     }

//     let handleAge = () => {
//         setAge(21)
//     }

//     let handlePlace = () => {
//         setPlace("L Kompa")
//     }

//     return <>
//     <h1>My Name is {name} </h1>
//     <h1>I am {age} Years old</h1>
//     <h1>I am from {place} </h1>
//     <button onClick={handleName}>Reveal Name</button>
//     <button onClick={handleAge}>Reveal Age</button>
//     <button onClick={handlePlace}>Reveal Place</button>
//     </>
// }
// export default State


// 3) EXAMPLE 3

import { useState } from "react"

let State = () => {

    let[details, setDetails] = useState({
        name : "",
        age : "",
        place : ""
    })

    let handleDetails = () => {
        setDetails({
            name : "Sachin",
            age : 23,
            place : "Badangpet"
        })
    }
   
     let {name, place, age} = details

    return <>
    <h1>MY AGE IS :{age} </h1>
    <h1>I AM FROM : {place}</h1>
    <h1>MY NAME IS :{name} </h1>
    <button onClick={handleDetails}>Reveal Details</button>
    </>
}
export default State