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

// const splice = function (arr, index, delNum, addNum, addNum2) {
//     let newArr = []
//     let delArr = []
    
//     if (delNum != undefined) {
//         if (delNum != 0) {
//             if (addNum == undefined) {
//                 for (let i in arr) {
//                     if (i != index) {
//                         newArr = [...newArr, arr[i]]
//                     } else {
//                             delArr = [...delArr, arr[i]]
//                     }
//                 }
//             } else {
//                 for (let i in arr) {
//                     if (i != index) {
//                         newArr = [...newArr, arr[i]]
//                     } else {
//                         for (let j = 0; j < delNum; j++) {
//                             delArr = [...delArr, arr[i]]
//                         }
//                         newArr = [...newArr, addNum]
//                         i += delNum
//                     }
//                 }
//             }
//         } else {
//             for (let i in arr) {
//                 if (i != index) {
//                     newArr = [...newArr, arr[i]]
//                 } else {
//                     if (addNum2 != undefined) {
//                         newArr = [...newArr, addNum, addNum2]

//                     } else {
//                         newArr = [...newArr, addNum]
//                     }
//                     newArr = [...newArr, arr[i]]
//                 }
//             }

//         }
//     } else {
//         for (i = 0; i < index; i++) {
//             newArr = [...newArr, arr[i]]
//         }
//         for (i = index; i < arr.length; i++) {
//             delArr = [...delArr, arr[i]]
//         }
//     }
//     arr.length = newArr.length
//     for(let i = 0; i < newArr.length; i++){
//         arr[i] = newArr[i]
//     }
//     return delArr
// }


// // remove 1 element
// let arr = [1, 2, 3]
// splice(arr, 0, 1);
// console.log(arr); //should be [2,3]


// // add 1 element
// arr = [1, 2, 3]
// splice(arr, 0, 0, 0);
// console.log(arr); //should be [0,1,2,3]

// // add 2 elements
// arr = [1, 2, 3]
// splice(arr, 0, 0, -1, 0);
// console.log(arr); //should be [-1,0,1,2,3] 

// // replace 1 element
// arr = [1, 2, 3]
// splice(arr, 1, 1, 55);
// console.log(arr); //should be [1,55,3] 

// // delete all elements from index to end
// arr = [1, 2, 3, 4, 5]
// splice(arr, 1);
// console.log(arr); //should be [1]

// // returns array of deleted elements
// arr = [1, 2, 3]
// let deleted = splice(arr, 1);
// console.log(deleted); //should be [2,3]

// // returns an array of the deleted element (1 element)
// arr = [1, 2, 3]
// deleted = splice(arr, 1, 1);
// console.log(deleted); //should be [2] 


// // returns an empty array when no elements are deleted
// arr = [1, 2, 3]
// deleted = splice(arr, 1, 0, 5);
// console.log(deleted); //should be [] 

//ex mini lesson
const removeSpecial = function(str) {
    for(let i of str){
         str =   str.replace('.' , '')
         str =   str.replace(',' , '')
         str =   str.replace("'" , '')
         str =   str.replace('"' , '')
         str =   str.replace('?' , '')
         str =   str.replace('!' , '')
         str =   str.replace(";", '')  
    }
    return str
}
const creatWords = function(str) {
    let words = {}
    let word = ''
    for(let char of str){
        if(char != " "){
            word += char
            str = str.substr(1);
        }else{
            str = str.substr(1);
            words[word] = 0
            word=""
        }

    }
    return words
}

const countWord = function(str, word){
    counter = 0;
    let words = str.split(" ")
    for( let i of words){
        if(i == word){
            counter++
        }
    }
    return counter
        
}



const countAllWords = function(story, word){
    story = story.toLowerCase()
    story = removeSpecial(story)
    word = creatWords(story)
    let arrWords = story.split(" ")
    for(let w of arrWords){
        word[w] = countWord(story, w)
    }

return word
}

let story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}
console.log(countAllWords(story, wordCounts))
