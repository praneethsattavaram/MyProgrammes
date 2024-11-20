// let JavascriptXtension = () => {
//     return <h1>JAVASCRIPT AND XML</h1>
// }
// export default JavascriptXtension

// Rules to write JSX

// - - extra node
// let JavascriptXtension = () => {
//     return <div>
//         <h1>HEADING</h1>
//         <p>Lorem ipsum, dolor sit amet</p>
//         <button>CLICK</button>
//     </div>
// }
// export default JavascriptXtension


// Using Fragment
// import React from "react";
// let JavascriptXtension = () => {
//     return <React.Fragment> 
//         <h1>HEADING</h1>
//         <p>Lorem ipsum, dolor sit amet</p>
//         <button>CLICK</button> 
//     </React.Fragment>
// }
// export default JavascriptXtension


// 2) UNPAIRED TAGS SHOULD BE CLOSED PROPERLY
// let JavascriptXtension = () => {
//     return <>
//         <input/>
//         <br/>
//         <hr/>
//         <img/>
//     </>
// }
// export default JavascriptXtension


// 3) SOME ATTRIBUTES LIKE CLASS AND FOR SHOULD BE REPLACED WITH className and htmlFor RESPECTIVELY
let JavascriptXtension = () => {
    return (
        <>
        <h1 className="hello">HEADING</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <label htmlFor="name">NAME: </label>
        <input type="text"/>
        </>
    )
} 
export default JavascriptXtension


// 4) JSX ELEMENTS SHOULD ALWAYS BE WRITTEN IN LOWERCASE
// let JavascriptXtension = () => {
//     return (
//         <>
//         <h1>SACHINDRA</h1>
//         <P>SACHILLY</P>
//         </>
//     )
// }
// export default JavascriptXtension

// 5) (render variables into JSX elements) 

// let JavascriptXtension = () => {
//     let name = "Praneeth";
//     let age = 21
//     return (
//         <>
//         <h1>MY NAME IS: {name}</h1>
//         <h1>MY AGE IS : {age} </h1>
//         </>
//     )
// }
// export default JavascriptXtension