// // 1) charAt(index)

// let str1 = "VARALASKMI SARATHKUMAR"
// console.log(str1.charAt(17))
// console.log(str1.charAt(9))
// console.log(str1.charAt(25))
// console.log(str1.charAt(-1))

// // 2) charCodeAt(index)

// let str2 = "BELATED HAPPY INDEPENDENCE DAY"
// console.log(str2.charCodeAt(1))
// console.log(str2.charCodeAt(str2.length-1))
// console.log(str2.charCodeAt(-1))

// // 3) toLowerCase()

// let str3 = "RAKSHA BANDAN"
// console.log(str3.toLowerCase())

// // 4) toUpperCase()

// let str4 = "teej"
// console.log(str4.toUpperCase())

// // 5)repeat(count)

// let str5 = "UYYALA JAMPALA"
// console.log(str5.repeat(0))
// console.log(str5.repeat(2))

// // 6) split(seperator)

let str6 = "ATLA/UNTADI/MANA/THONI"
// console.log(str6.split("/"))
// console.log(str6.split("N"))

// // 7) concat(..string)

// let str7 = "JAI"
// let str8 = "BALAYYA"
// console.log(str7.concat(str8))
// console.log(str7.concat(" ",str8))

// // 8) replace(searchValue, replaceValue)

// let str9 = "MODEL MONTY MODEL"
// console.log(str9.replace("MODEL", "MONSTER"))

// // 9) replaceAll(serachValue, replaceValue)

// console.log(str9.replaceAll("MODEL", "MONSTER"))

// // 10) trimstart(), trimEnd(), trim()

// let str10 = "  JAI SHREE RAM  "
// console.log(str10.length)
// console.log(str10.trimStart())
// console.log(str10.trimEnd())
// console.log(str10.trim())

// 11) indexOf(searchValue, index)

let str11 = "SURPRISE"
console.log(str11.indexOf("R",0)) //2
console.log(str11.indexOf("S")) //0
console.log(str11.indexOf("S",1)) //6
console.log(str11.indexOf("I",6)) //-1
console.log(str11.indexOf("I",-3)) //5
console.log(str11.indexOf("Z",-3)) //-1
console.log(str11.indexOf("RI",2)) //4
console.log(str11.indexOf("RZ",2)) //-1

// 12) lastIndexOf(searchValue, index)

let str12 = "SURPRISE"
console.log(str12.lastIndexOf("R")) //4
console.log(str12.lastIndexOf("S",5)) //0
console.log(str12.lastIndexOf("I",6)) //5
console.log(str12.lastIndexOf("I",-3)) //-1
console.log(str12.lastIndexOf("Z",-3)) //-1
console.log(str12.lastIndexOf("SE")) //6
console.log(str12.lastIndexOf("SZ")) //-1

// 13) slice(startIndex, endIndex)

let str13 = "RKSHA BANDHAN"
console.log(str13.slice(0)) //RAKSHA BANDHAN
console.log(str13.slice(0,5)) //RAKSH
console.log(str13.slice(-5,12)) //NDH
console.log(str13.slice(-7,-3)) //BAND
console.log(str13.slice(5,3)) //""
console.log(str13.slice(-1,-7)) //""

// 14) substring(startIndex, endIndex)

let str14 = "RAKSHA BANDHAN"
console.log(str14.substring(0)) //RAKSHA BANDHAN
console.log(str14.substring(4,9)) //HA BA
console.log(str14.substring(-5,12)) //RAKSHA BANDH
console.log(str14.substring(-7,-3)) //""
console.log(str14.substring(5,3)) //SH
console.log(str14.substring(-1,-7)) //""

