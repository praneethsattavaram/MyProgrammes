import React, { useEffect } from 'react'

const Unmount = () => {

    useEffect ( () => {
        console.log("Succesfully acting as UNMOUNTING Phase")
    })
  return (
    <div>Unmount</div>
  )
}

export default Unmount