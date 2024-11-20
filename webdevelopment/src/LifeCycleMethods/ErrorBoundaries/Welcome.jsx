import React from 'react'

const Welcome = ({ name }) => {

    if(name == "Fencing"){
        throw new Error("Fencing IS NOT A VALID NAME")
    }
  return (
    <h1>Welcome {name}</h1>
  )
}
export default Welcome