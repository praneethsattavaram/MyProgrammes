import React from "react"
import Unmount from "./Unmount"

class LifeCycle extends React.Component{
    constructor(){
    super()
    console.log("Constructor Method Running")
    this.state={
        name:"Sachin",
    }
}

    componentDidMount(){
        console.log("Component Did Mount")
    }
    render(){
        console.log("Render Method")
        return<>
        <h1>LIFECYCLE - {this.state.name}</h1>
        {this.state.name == "Sachin" ? <Unmount/>:<></>}
        <button onClick={()=>this.setState({name:'Fencing'})}>CLICK TO CHANGE NAME</button>
        </>
    }
    componentDidUpdate(){
        console.log("COMPONENT DID UPDATE METHOD IS RUNNING ")
    }
}
export default LifeCycle