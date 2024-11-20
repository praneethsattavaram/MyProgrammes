import React, { useEffect, useState } from 'react'
import Unmount from './Unmount';


const Effect = () => {
    let [age, setAge] = useState(24);
    let handleAge = () => {
    setAge(age + 1);
    }

    let [salary, setSalary] = useState(10000);
    let handleSalary = () => {
        setSalary(salary + 10000);
    }

// useEffect without Dependency
// useEffect( ()=> {
//     console.log("USEEFFECT RUNNIG acting like updating Phase");
    
// })

// useEffect with empty Dependency
// useEffect( () => {
//     console.log("USEEFECT RUNNING acting like mounting phase")
// },[]);

// useEffect with Dependency
useEffect( () => {
    console.log("USEEFFECT RUNNING ...")
},[age])
  return(
   <>
     <h1>Age - {age}</h1>
     {age<27?<Unmount/>:<></>}
     <h1>Salary - {salary}</h1>
     <button onClick={handleAge}>Click to Increment Age</button>
     <button onClick={handleSalary}>Click to Increment Salary</button>
    </>
  );
}

export default Effect