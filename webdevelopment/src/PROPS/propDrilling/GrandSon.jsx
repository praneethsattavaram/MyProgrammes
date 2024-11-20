import React from 'react'

let GrandSon = (props) => {
    console.log(props)
    let{send2 : {send1: {product, price }}} = props

  return <h1>GRAND SON finally took {product} of worth {price} </h1>
}

export default GrandSon