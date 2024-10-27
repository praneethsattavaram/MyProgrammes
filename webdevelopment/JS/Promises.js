let p = new Promise((resolve, reject)=> {
    let meet = false
    if(meet) {
        resolve("PROMISE WAS RESOLVED")
    }
    else {
        reject("PROMISE WAS REJECTED")
    }
})
// console.log(p) pending

p.then((erri) => {
    console.log(erri)
    console.log("GUYS THENGI THINANDI")
})

p.catch((erripuvva) => {
    console.log(erripuvva)
    console.log("PAISAL LEVU RA BATTA")
})