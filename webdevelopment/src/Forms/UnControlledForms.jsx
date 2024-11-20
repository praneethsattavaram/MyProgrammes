//  THROUGH DOM


// import React from 'react'

// const UnControlledForms = () => {

//     let handelSubmit = (e)=> {
//         e.preventDefault()
//         let name = document.getElementById("name").value
//         let email = document.getElementById("email").value
//         let password = document.getElementById("password").value
//         console.log(name,email,password);       
//     }




//   return <form onSubmit={handelSubmit}>
//   <input type="text" placeholder="Name" id="name"/><br /><br />
//   <input type="email" placeholder="email" id="email"/><br /><br />
//   <input type="password" placeholder="Password" id="password" /><br /><br />
//   <input type="submit"  value="Register"/>
// </form>

// }

// export default UnControlledForms







// THTROUGH USEREF()


import React, { useRef } from 'react'

const UnControlledForms = () => {
   let nameRef = useRef();
   let emailRef = useRef();
   let passwordRef = useRef();
   let handelSubmit = (e)=>{
    e.preventDefault()
    //ACCESSING VALUE
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);

    //STYLES
    emailRef.current.style.color="white"
    emailRef.current.style.backgroundColor="black"

    //FOCUS
    nameRef.current.focus()
   }
  return (
  <form onSubmit={handelSubmit}>
       <input type="text" placeholder="Name" id="name" ref={nameRef}/><br /><br />
       <input type="email" placeholder="email" id="email" ref={emailRef}/><br /><br />
       <input type="password" placeholder="Password" id="password" ref={passwordRef} /><br /><br />
       <input type="submit"  value="Register"/>
     </form>
   
  )
}

export default UnControlledForms