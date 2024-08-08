// //! if
// let mock = true;
// if(mock){
//     console.log("Preferred for requirements")
// }

// //! if-else

// let husband = false;
// if(husband){
//     console.log('DO NOT ENTER INTO MY HOMW')
// } else{
//     console.log("BRING THE BOTTLE TO HOME WE WILL DRINK TOGETHER")
// }

// //! else-if 

// let amount = 50;
// if(amount>300){
//     console.log("Eat Chicken Biriyani")
// } else if (amount>200 && amount<=300){
//     console.log("Eat Paneer Biryani")
// } else if (amount>100 && amounta<=200){
//     console.log("Eat Veg Fried Rice")
// } else {
//     console.log("Nooru muskoni intiki vellu")
// }

//! SWITCH CASE
//*Example 1

let subject = "Data Science"
switch(subject){
    case "Java":
        console.log("ASNAN SIR")
        break;
    case "Python":
        console.log("MONTY SIR")
        break;
    case "Sql":
        console.log("HARSHA SIR, YASIN SIR AND SHANKAR SIR")
        break;
    case "Web":
        console.log("RAHUL SIR")
        break;
    default:
        console.log("The trainer is not available for the specified subject")
}

//* Example 2

let girlsAge = 25
switch(true){
    case(girlsAge>30):
    console.log("Already its too late to get married")
    break;
    case(girlsAge>25 && girlsAge<=30):
    console.log("Perfect Age to get married")
    break;
    case(girlsAge>18 && girlsAge<=25):
    console.log("too young to get married")
    break;
    default:
        console.log("child marriage")
}