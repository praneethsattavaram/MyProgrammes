import React, { useContext } from "react"
import { Biriyani, Chips, ColdDrinks } from '../App'

let GrandSonContext = () => {
  let whichChips = useContext(Chips)
  let whichDrink = useContext(ColdDrinks)
  let whichFood = useContext(Biriyani)


  return ( <h1> GrandSonContext - {whichChips} , {whichDrink} , {whichFood} </h1> )
}

export default GrandSonContext