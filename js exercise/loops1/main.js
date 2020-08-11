// let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
// for(let company of companies){
//     console.log("One day I will work at " + company)
//   }

// ex 1
// let age = [18,20,11,36,45,27,53]
// let name = ['yosi','avi','ido', 'dana', 'amit','michal', 'yoni']
// for(let i in age){
//     console.log(name[i] + " is " + age[i] + " years old")
// }

// ex 2
// let nums = [18,20,11,36,45,27,53]
// let sum = 0 
// for(let i of nums){
// sum += i
// }
// console.log(sum)

//ex 3
// let nums = [18,20,11,36,45,27,53]
// let sum = 0 
// let count = 0
// for(let i of nums){
// sum += i
// count++
// }
// let avg = sum/count
// console.log(avg)

//ex4
// let nums = []
// for(let i = 0; i<100; i++){
// nums[i] = i+1;
// }

//ex5
// for(let i of nums){
//     if(i%2 == 1){
//         console.log(i)
//     }
// }

//ex6
// let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
// for(let i in nums){
//     if(nums[i] == 709){
//         console.log(i)
//     }
// }

//ex 7
// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []
// for(i in names){
//     people.push({name:names[i], age:ages[i]})
// }
// console.log(people)

//ex 8
// for(p of people){
//     console.log(p.name + " is " + p.age + " years old")
// }

//ex 9
// const posts = [
//     {id: 1, text: "Love this product"},
//     {id: 2, text: "This is the worst. DON'T BUY!"},
//     {id: 3, text: "So glad I found this. Bought four already!"}
//   ]
//   for(let i in posts){
//       if(posts[i].id == 2){
//         posts.splice(i, 1)
//       }
//   }
//   console.log(posts)

//ex 10
// const posts = [
//     {
//       id: 1, 
//       text: "Love this product",
//       comments: []
//     },
//     { 
//       id: 2, 
//       text: "This is the worst. DON'T BUY!", 
//       comments: [
//                   {id: 1, text: "Idiot has no idea"}, 
//                   {id: 2, text:"Fool!"}, 
//                   {id: 3, text: "I agree!"}
//                 ]
//      },
//      {
//       id: 3, 
//       text: "So glad I found this. Bought four already!",
//       comments: []
//      }
//   ]
// let position = 0;
// for(let i in posts){
//     if(posts[i].id == 2){
//      position = i;
//     }
// }
// for(let j in posts[position].comments){
//     if(posts[position].comments[j].id == 3){
//         posts[position].comments.splice(j,1)
//     }
// }
// console.log(posts)

//ex extention
// const dictionary = {
//     "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
//     "B": ["Banana", "Bonkers", "Brain", "Bump"],
//     "C": ["Callous", "Chain", "Coil", "Czech"]
//   }
// console.log(dictionary['A'])
//   for(let letter in dictionary){
//       console.log("Words that begin with " + letter +":" )
//       for(let word of dictionary[letter]){
//           console.log(word)
//       }
//   }


