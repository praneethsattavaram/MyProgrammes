// let ChildProps = ({firstName,lastName,age,fun,obj:{place}}) => {
//     return <>
//     <h1>{firstName} {lastName} {age} {place}</h1>
//     <button onClick={fun}>Click To Say Hii</button>
//     </>
// }
// export default ChildProps

// PROPS CHILDREN

// let ChildProp = ({msg, children}) => {
// 	return <div> {msg} {children} </div>
// }
// export default ChildProp


//  DEFAULT PROPS
// const ChildProp = ({name, age, place, pincode}) => {
// 	return (
// 		<h1>{name}-{age}-{place}-{pincode}</h1>
// 	)
// }
// export default ChildProp

// ChildProp.defaultProps = {
// 	name: "Rahul",
// 	place : "BANGLORE",
// 	pincode : 500035
// }


// USING DEFAULT PARAMETERS
// let ChildProp = ({name, age, place = "hyd", pincode = 500060}) => {
// 	return <h1>{name} {age} {place} {pincode}</h1>
// }
// export default ChildProp


//  PROPTYPES
import Rahul from "prop-types";
let ChildProp = ({name, age}) => {
	return <h1>{name}-{age}</h1>
}
export default ChildProp

ChildProp.protoTypes = {
	name : Rahul.string,
	age : Rahul.number
}