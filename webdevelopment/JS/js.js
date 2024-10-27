let fun1 = () => {
    let red = Math.random()*255
    let green = Math.random()*255
    let blue = Math.random()*255
    let finalColorValue = `rgb(${red}, ${green}, ${blue})`
    let body = document.body
    body.style.background = finalColorValue
}