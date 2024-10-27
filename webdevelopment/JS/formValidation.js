// let form = document.querySelector("form")
// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     let name = document.getElementById("name").value 
//     let mobile = document.getElementById("phone").value 
//     let password = document.getElementById("password").value
//     let confirmpass = document.getElementById("confirm").value
//     // console.log(name)
//     // console.log(mobile)
//     // console.log(password)
//     // console.log(confirmpass)

//     // name
//     if(name.length < 3 | name.length > 10) {
//         alert("PLEASE ENTER A NAME BETWEEN THE CHARACTER RANGE 3 TO 10")
//     } else {
//         console.log(name)
//     }

//     // phone
//     if(mobile.length!=10){
//         alert("ENTER A VALID 10 DIGIT NUMBER")
//     } if(isNaN(mobile)){
//         alert("Please Enter Numerical Values")
//     } else {
//         console.log(mobile)
//     }

//     // password
//     if (password != confirmpass) {
//         alert("PASSWORD IS NOT MATCHING")
//     } else {
//         console.log(password)
//         console.log(confirmpass)
//     }

//     let eye1 = document.getElementById("peye")
//     let isPasswordVisible = false;
//     eye1.addEventListener("click", () => {
//         if(isPasswordVisible) {
//             password.type = "password";
//             isPasswordVisible = false;
//         } else {
//             password.type = "text";
//             isPasswordVisible = true;
//         }
//     });
// })

let form = document.querySelector("form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            let name = document.getElementById("name").value;
            let mobile = document.getElementById("phone").value;
            let password = document.getElementById("password").value;
            let confirmpass = document.getElementById("confirm").value;


         // Flag to check if all conditions are met
        let allValid = true;

        // Name validation
        if (name.length < 3 || name.length > 10) {
            alert("PLEASE ENTER A NAME BETWEEN THE CHARACTER RANGE 3 TO 10");
            allValid = false;
        }

        // Phone validation
        if (mobile.length != 10 || isNaN(mobile)) {
            alert("ENTER A VALID 10-DIGIT NUMBER (NUMERICAL VALUES ONLY)");
            allValid = false;
        }

        // Password validation
        if (password !== confirmpass) {
            alert("PASSWORD IS NOT MATCHING");
            allValid = false;
        }

        // If all conditions are met, log the details to the console
        if (allValid) {
            console.log("Name:", name);
            console.log("Mobile:", mobile);
            console.log("Password:", password);
            console.log("Confirm Password:", confirmpass);
        }

        // Toggle password visibility
        let eye1 = document.getElementById("peye");
        let eye2 = document.getElementById("cpeye");
        let passwordField = document.getElementById("password");
        let confirmPasswordField = document.getElementById("confirm");

        let isPasswordVisible = false;

        eye1.addEventListener("click", () => {
            toggleVisibility(passwordField);
        });

        eye2.addEventListener("click", () => {
            toggleVisibility(confirmPasswordField);
        });

        function toggleVisibility(field) {
            if (field.type === "password") {
                field.type = "text";
            } else {
                field.type = "password";
            }
        }
    })