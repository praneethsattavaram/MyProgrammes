document.getElementById("inner")
document.getElementById("outer")
// console.log(outer)
// console.log(inner)
outer.addEventListener("click" ,() => {
    alert("MOOTA MUTTUKOKUDADHU RA MURKUDA")
},true)
inner.addEventListener("click", () => {
    alert("PILLA BACHA NAYALA")
    e.stopPropagation()
},true)