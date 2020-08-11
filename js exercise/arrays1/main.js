// let myStuff = ["surfboard", "tv", "water"]
// console.log(myStuff[1])
// const first = myStuff[0]
// const last = myStuff[myStuff.length-1]
// myStuff.push(first)
// myStuff.unshift(last)
// console.log(myStuff)
// myStuff = [...myStuff, ...myStuff]
// console.log(myStuff)
 
// const plants = ["Oak", "Lilly", "Belladonna", "Tulip", "Yew"]
// console.log("the first planet is " + plants[0] + ", and the last plant is " + plants[plants.length-1])

// arr = ["clouds", "sky", "birds", "worms", "earth", "dirt", "clothes", "human", "life"]
// arr.splice(0, arr.length-1)
// console.log(arr)

// const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
// //const newGenes = [genes[0], genes[1], genes[4], genes[2], genes[3], genes[3]]
// const newGenes = []
// // newGenes[0] = genes[0]
// // newGenes[1] = genes[1]
// // newGenes[2] = genes[4]
// // newGenes[3] = genes[2]
// // newGenes[4] = genes[3]
// // newGenes[5] = genes[3]
// newGenes.push(genes[0], genes[1], genes[4], genes[2], genes[3], genes[3])
// newGenes.unshift("FXT")
// console.log(newGenes)

// let car = {
//     color: "red",
//     numWheels: 4,
//     isFancy: false
// }
// const fancyOrNot = car.isFancy?"fancy":"not fancy"
// console.log("the " + car.color + " car has " + car.numWheels + " wheels. it is " + fancyOrNot)

// let obj = {
//     item: "house",
//     toBeginning: false,
//     items: ["car", "boat"]
// }
// if(obj.toBeginning){
//     obj.items.unshift(obj.item)
// }else {
//     obj.items.push(obj.item)
// }
// console.log(obj.items) 

// const human = {
//     age: 0
// }
// const babyNameKey = "name"
// const babyNameValue = "Goojibear"
// human[babyNameKey] = babyNameValue
// human[babyNameKey] = "Yonatan"
// console.log(human)

// let person = {
//     firstName: "Dopple",
//     lastName: "Ganger"
//   }
  
//   let p = person
//   p.firstName= "Chappy"
  
//   console.log(p)
//   console.log(person)

//exrcises
//ex1 
// let p1 = {  
//     name:"Jill",
//     age:24,
//     city:"Tel Aviv"
// }
// let p2 = {
//     name:"Robert",
//     age:24,
//     city:"Tel Aviv"
// }
// if(p1.age === p2.age){
//     if(p1.city === p2.city){
//         console.log("Jill wanted to date Robert")
//     }else{
//         console.log("Jill wanted to date Robert, but couldn't")
//     }
// }

//ex 2,3
// let obj1 = { 
//     blessing: "hello",
//     num: 4
// }
// let obj2 = {
//     blessing: "hi",
//     num: 9
// }
// let myList = [obj1, obj2]
// myList[1].blessing = "hi you"
// //console.log(myList[1])
// myList.splice(0,1)
// // console.log(myList[0])

// let p1 = {
//     name: "danny",
//     age: 26
// }
// let p2 = {
//     name: "roni",
//     age: 25
// }
// let arr = [p1,p2]
// myList = [...myList, ...arr]
// //console.log(myList[2].name)

//ex 4
// let library = { 
//     books: [harryPotter = {title:"chamberSecrets", author:"j.k roling"}, danidin = {title:"yeledpela", author:"shraga"} ]
// }
// //console.log(library.books)
// myList = [...myList, ...library.books]
// console.log(myList[0])
// console.log(myList[1])
// console.log(myList[2])
// console.log(myList[3])
// console.log(myList[4])

//ex 5
// const reservations = { 
//     bob: { claimed: false },
//     ted: { claimed: true }
//   }
  
//   let name = prompt('Please enter the name for your reservation');
//   name = name.toLowerCase()
//   if(reservations[name]){
//       if(!(reservations[name].claimed)){
//           console.log("welcome")
//       }else{
//           console.log("we have a problem")
//       }
//   }else{
//       console.log("there is nothing under your name")
//       reservations[name.toLowerCase()] = { claimed: true };
//   }
//   //console.log(reservations)

//ex Extensions
const date = 3
const kitchen = {
    owner: "Geraldine",
    hasOven: true, // choose one
    fridge: {
        price: 500,
        works: true, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}
let msg = kitchen.owner + " " + kitchen.fridge.items[1].name + " expired " + (date - kitchen.fridge.items[1].expiryDate) + " days ago. ";
if(kitchen.fridge.works){
msg += "Weird, considering her fridge works. ";
}else{
    msg += "Probably because her fridge doesn't work. ";
}
if(kitchen.hasOven){
    msg+= "Luckily, she has an oven to cook the "+ kitchen.fridge.items[1].name +" in. ";
}else{
    msg+= "Too bad she doesn't have an oven to cook the " + kitchen.fridge.items[1].name + " in. ";
}
if(!(kitchen.fridge.works)){
    msg+="And she'll have to pay " + (kitchen.fridge.price/2) + " to fix the fridge."
}
console.log(msg)