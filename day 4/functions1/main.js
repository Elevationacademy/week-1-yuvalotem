// const person = {
//     name: "Julius",
//     speak: function(food) {
//       console.log("i like " + food)
//     }
//   }

//   person.speak('cheese toast')

//ex 1
// const calcAge = function(yearOfBirth, thisYear){
//     return thisYear - yearOfBirth;
// }
// const calcAge2 = function(year1, year2){
//     if(year1>year2){
//         return year1-year2
//     }else{
//         return year2-year1
//     }
// }
// console.log(calcAge2(2015, 2019))

//ex2
// const calcAge3 = function(yearOfBirth, thisYear){
//     let age = thisYear - yearOfBirth;
//     console.log(`you are either ${age} or ${age-1}`)
// }
// calcAge3(1997,2020)

//ex 3
// const isEven = function(num){
//     if(num % 2 == 0){
//     return true
// }else{
//     return false
// }
// }
// console.log(isEven(1))

//ex 4
// const printOdd = function(arr){
//     for(num of arr){
//         if(!(isEven(num))){
//             console.log(num)
//         }
//     }
// }
// const numbers = [1,4,2,6,7,2,5,9,6,8,11,44,62,103]
// printOdd(numbers)

//ex 5
// const checkExists = function(arr, num){
//     for(let number of arr){
//         if(number === num){
//             return true
//         }
//     }
//     return false
// }
// const arrOfNumbers = [1,54,12,376,23,97]
// const newNum = 53
// console.log(checkExists(arrOfNumbers, newNum))

//ex 6
// const calculator = {
//     add: function(num1, num2) {
//         return num1+num2
//     },
//     subtract: function(num1, num2){
//         return num1 - num2
//     }
// }
// const result1 = calculator.add(20, 1)
// const result2 = calculator.subtract(30, 9)

// console.log(calculator.add(result1, result2))

//ex 7
// const increaseByNameLength = function(num, str) {
//     return num*str.length
// }
// const makeRegal = function(str){
//     return "His Royal Highness, " + str
    
// }
// const turnToKing = function(name, money){
//     name = name.toUpperCase()
//     money = increaseByNameLength(money, name)
//     name = makeRegal(name)

//     console.log(name + " has " + money + " gold coins")
// }

// turnToKing("martin luther", 100)

//ex extention
const splice = function(arr,place){
      arr.splice(place,1)
}