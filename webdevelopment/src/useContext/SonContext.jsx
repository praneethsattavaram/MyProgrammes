import GrandSonContext from './GrandSonContext'
import { Obj } from '../App'
import { useContext } from 'react'

let SonContext = () => {
  let whichObj = useContext(Obj)
    let {name, age , isStar, fun} = whichObj
  return <>
  <GrandSonContext/>
  <h1>{name}, {age}</h1>
  <button onClick={fun}>CLICK</button>
  </>
}

export default SonContext