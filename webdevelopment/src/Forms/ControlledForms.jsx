import React, { useState } from "react";

const ControlledForms = () => {

    let [details, setDetails] = useState({
        name : '',
        email : '',
        password : ''
    })

    let {name, email, password} = details

    let handleNameChange = (e) => {
        setDetails({name:e.target.value})
    }

    let handleEmailChange = (e) => {
        setDetails({email:e.target.value})
    }

    let handlePasswordChange = (e) => {
        setDetails({password:e.target.value})
    }

    let handleSubmit=(e) => {
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(password)
    }
    return <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name : </label>
        <input type="text" name="name" id="name" value={name} onChange={handleNameChange}></input> <br /> <br />
        <label htmlFor="email">Email : </label>
        <input type="email" name="email" id="email" value={email} onChange={handleEmailChange}></input> <br /> <br />
        <label htmlFor="password">Password : </label>
        <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange}></input> <br /> <br />
        <input type="submit" value="Register"/>
    </form>
    </>
}

export default ControlledForms