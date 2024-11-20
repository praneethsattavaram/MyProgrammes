import React, { Component } from 'react'

class Unmount extends Component {
    componentWillUnmount(){
        console.log("Component unmounted successfully")
    }
  render() {
    return (
      <h1>Unmount</h1>
    )
  }
}
export default Unmount
