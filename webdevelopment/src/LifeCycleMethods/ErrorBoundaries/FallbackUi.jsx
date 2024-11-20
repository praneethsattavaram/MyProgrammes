import React, { Component } from 'react'

class FallbackUi extends Component {
    constructor(){
        super()
        this.state = {
            hasError : false
        }
    }

    static getDerivedStateFromError(){
        return {
            hasError:true
        }
    }
    componentDidCatch(error, info){
        console.log(error)
        console.log(info)
    }
  render() {
    return <>
    {this.state.hasError?<h1>SOME THING WENT WRONG</h1>:this.props.children}
    </>
  }
}
export default FallbackUi