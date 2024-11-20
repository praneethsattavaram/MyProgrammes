// import ChildProps from "./ChildProps"
// let ParentProps = () => {

//     let sayHii = () =>{
//         console.log("Hiii");
//     }
//     return <ChildProps
//     firstName="Naruto" lastName="Uzumaki" age={25} fun={sayHii} obj={{place:"Leaf Village"}}/>
// }
// export default ParentProps


// PROPS CHILDREN

// import ChildProp from "./ChildProp";
// let ParentProp = () => {
//     return <>
//     <ChildProp msg = "HAPPY BIRTHDAY">
//         <h1>VIRAT KOHLI</h1>
//     </ChildProp>
//     </>
// }
// export default ParentProp



//  DEFAULT PROPS
// import ChildProp from "./ChildProp";
// const ParentProp = () => {
//     return <ChildProp name = "Praneeth" age = {21} />
// }
// export default ParentProp



// PROPTYPES
import ChildProp from "./ChildProp";
let ParentProp = () => {
    return <ChildProp name = "Amar" age = "18"/>
}
export default ParentProp