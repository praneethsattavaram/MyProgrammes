// let data = fetch("https://fakestoreapi.com/products")
// data.then((result) => {
//     // console.log(result.json())
//     return result.json()
// }).then((result) => {
//     console.log(result)
// })

// async and await
// let fetchData = async() => {
//     let data = await fetch("https://fakestoreapi.com/products")
//     let finalResult = await data.json()
//     console.log(finalResult)
// }

let container = document.getElementById("container")
console.log(container)
let fetchData = async() => {
    let data = await fetch("https://fakestoreapi.com/products")
    let finalData = await data.json()
    finalData.map((items) => {
        container.innerHTML += `
        <main id = "card_container"
            <h1>${items.id}</h1>
            <h1>${items.title}</h1>
            <img src = ${items.image}>
            <p>${items.description}</p>
            <h1><i>${items.price}</i></h1>
        </main>`
    })
}
fetchData()