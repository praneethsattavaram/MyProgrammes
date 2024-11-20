// CLASS BASED COMPONENT



// import React from "react";
// class App extends React.Component{
//     render(){
//         return <h1>IM CLASS BASED COMPONENT</h1>
//     }
// }
// export default App


// FUNCTION BASED COMPONENT
// let App = () => {
//     return <h1>IM FUNCTION BASED COMPONENT</h1>
// }
// export default App


// 26/10
// JSX

// import JavascriptXtension from "./JSX/JavascriptXtension"

// let App = () => {
//     return <JavascriptXtension/>
// }
// export default App


// 29/10
// useState

// import State from "./useState/State";

// let App = () => {
//     return <State/>
// }
// export default App

// 
// import ParentProp from "./PROPS/ParentProp";
// let App = () => {
//     return <ParentProp/>
// }
// export default App


// 06/11/2024
// PROP DRILLING

// import GrandFather from "./PROPS/propDrilling/GrandFather";
// let App = () => {
//     return <GrandFather/>
// }
// export default App


// 07/11/2024
// useContext()

// import React from "react"
// import GrandFatherContext from "./useContext/GrandFatherContext"

// export let Chips = React.createContext();
// export let ColdDrinks = React.createContext();
// export let Biriyani = React.createContext()

// export let Obj = React.createContext()

// let details = {
//     name : "sunny",
//     age : "42",
//     isStar: true,
//     fun:()=>  console.log("Hello") 
// }

// let App = () => {
//     return <>
//         <Chips.Provider value="Lays">
//         <ColdDrinks.Provider value="Coke">
//         <Biriyani.Provider value="Ambur Biriyani">
//         <Obj.Provider value={details}>
//         <GrandFatherContext/>
//         </Obj.Provider>
//         </Biriyani.Provider>
//         </ColdDrinks.Provider>
//         </Chips.Provider>
        
    
//     </>
// }
// export default App

//INlineCSS



// import React from "react"
// import InLineCss from "./AddingStyles/InLineCss"
// const App = () => {
//   return  <InLineCss/>
  
// }

// export default App





//GLOBAL CSS


// import React from 'react'
// import GlobalCss from './AddingStyles/GlobalCss'
// import "./Global.css"

// const App = () => {
//   return (
//     <GlobalCss/>
//   )
// }

// export default App





// MODULE CSS


// import React from 'react'
// import Main from './AddingStyles/ModuleCss/Main'

// const App = () => {
//   return<Main/>
// }

// export default App


// UNCONTROLLED FORMS

// import React from 'react'
// import UnControlledForms from './Forms/UnControlledForms'

// const App = () => {
//   return(
//   <UnControlledForms/>
// )
// }

// export default App


// CONTROLLED FORMS

// import React from 'react'
// import ControlledForms from './Forms/ControlledForms'
// const App = () => {
//     return (
//         <ControlledForms/>
//     )
// }
// export default App


// LIFECYCLE METHODS

// import React from "react"
// import LifeCycle from './LifeCycleMethods/LifeCycle'
// const App = () => {
//     return (
//         <LifeCycle/>
//     )
// }
// export default App


// ERROR BOUNDARIES

// import React from 'react'
// import FallbackUi from './LifeCycleMethods/ErrorBoundaries/FallbackUi'
// import Welcome from './LifeCycleMethods/ErrorBoundaries/Welcome'

// const App = () => {
//   return <>
//     <FallbackUi>
//         <Welcome name = "Sachin"/>
//     </FallbackUi>
//     <FallbackUi>
//         <Welcome name="Fencing"/>
//     </FallbackUi>
//     <FallbackUi>
//         <Welcome name="Deepak"/>
//     </FallbackUi>
  
//     </>
// }

// export default App


// useEffect

import React from 'react'
import Effect from './useEffect/Effect'

const App = () => {
  return <>
  <Effect/>
  </>
}
export default App
