// let password = 1111
// let confirmPassword = 1110
// if(password === confirmPassword){
//     console.log("confirmed password")
// }else{
//     console.log("not confirmed password")
// }
// console.log(432*12)
// console.log(802/2)
// console.log((5+6)*3)
// if(undefined || null){
//     console.log(true)
// }
// let a = 3
// a = 4
// let c = 0
// let b = a
// b = 2
// a = b
// b = c
// c = a
// a = b
// console.log(a)
// console.log(b)
// console.log(c)

// let enoughMoneyInBank = false
// let hasJob = true
// if(enoughMoneyInBank){
//     console.log("go buy a gift")
// }else if(hasJob){
//     console.log("go to work")
// }else{
//     console.log("go to find a job")
// }

// let numChildren = prompt("please enter number of children")
// let isCareful = false
// if(!isCareful){
//     numChildren++;
// }
// console.log(numChildren)

// let silverwareCount = prompt("please enter number of silver ware")
// let silverWare = 8;
// if(silverwareCount < silverWare){
//     console.log("there is something missing");
// }else{
//     console.log("its all fine")
// }

// let performance = "stellar"
// let salary = 10000
// const goodBonus = 1000
// const stellarBonus = 3000
// if(performance === "stellar"){
//     salary += stellarBonus;
// }else{
//     salary += goodBonus;
// }
// console.log(salary)

// const isVIP = false
// let cash = 300
// if(cash>300 || isVIP) {
//     console.log("welcome to our club")
// }else{
//     console.log("your are not invited")
// } const a = 3

// const a = 3
// let b = 2
// let c = 0 || 12
// let d

// b = c
// b++
// if(d){
//   b = a
// }

// d = a + (b * c)
// d++
// b += 2
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// let gender = prompt("please enter your gender")
// let profession = "business"
// if(gender != 'men' && gender != 'women'){
//     profession += "person";
// }else{
// profession += gender;
// }
// console.log(profession)

let boughtTesla = true
let isUSCitizen = true
const currentYear = 2020
if(boughtTesla){
    if(isUSCitizen){
        const yearOfTeslaPurchase = 2018 // prompt("please enter year of prucash")
        if(currentYear-yearOfTeslaPurchase >= 4){
           console.log("would you like an upgrade?")
        }else{
            console.log("are you satisfied with the car?")
        }
    }else{
        console.log("would you like to move to us?")
    }
}else{
    console.log("are you intersted in buying one?")
}
