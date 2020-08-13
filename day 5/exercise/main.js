// //EX 2
// const reservations = {
//     bob: { claimed: false },
//     ted: { claimed: true }
// }

// const name = document.getElementById("name")
// const button = document.getElementById("btn")
// button.onclick = function () {
//     let ans = document.createElement("div")
//     let count = 0;
//     for (n in reservations) {
//         if (name.value.toLowerCase() == n) {
//             if (reservations[n].claimed == false) {
//                 count++
//             } else {
//                 count--
//             }
//         }
//     }
//     if (count == 1) {
//         ans.innerHTML = "welcome " + name.value.toLowerCase()
//         reservations[name.value.toLowerCase()] = true
//     } else if (count == -1) {
//         ans.innerHTML = "hello " + name.value.toLowerCase() + " your reservation already been taken"
//     } else {
//         ans.innerHTML = "hello " + name.value.toLowerCase() + " you dont seem to have a reservation, ill sign you straight away"
//         reservations[name.value.toLowerCase()] = false
//     }
//     console.log(reservations)
//     document.body.appendChild(ans)
//     document.getElementById("name").value = ''
// }

//ex3
// const randomColor = function() {
//     const colors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     return colors[randomIndex];
//   }
//     const changeColor1 = function() {
//         document.getElementById('box' + 1).style.backgroundColor = randomColor()
//     }
//     const changeColor2 = function() {
//         document.getElementById('box' + 2).style.backgroundColor = randomColor()
//     }
//     const changeColor3 = function() {
//         document.getElementById('box' + 3).style.backgroundColor = randomColor()
//     }
//     const changeColor4 = function() {
//         document.getElementById('box' + 4).style.backgroundColor = randomColor()
//     }
//     const changeColor5 = function() {
//         document.getElementById('box' + 5).style.backgroundColor = randomColor()
//     }
//     const changeColor6 = function() {
//         document.getElementById('box' + 6).style.backgroundColor = randomColor()
//     }


// for(let i = 1; i<7; i++){
//     const box = document.createElement('div')
//     box.setAttribute("class", 'box')
//     box.setAttribute("id", 'box' + i)
//     box.setAttribute("onmouseenter", `changeColor${i}()`)
//     document.getElementById("container").appendChild(box)
// }

// ex 4
const name = document.getElementById("name")
const sallary = document.getElementById("sallary")
const birthDay = document.getElementById("birthday")
const phoneNum = document.getElementById("phonenum")
const checkValid = function () {
    let count = 0
    if (name.value.length < 2) {
        document.getElementById("name").setAttribute("placeholder", 'unvalid name') 
        document.getElementById("name").style = 'border: 2px solid red'
        document.getElementById("name").value=""
        count++
    }else{
        document.getElementById("name").style = 'border: 2px solid green'
    }
    if (sallary.value < 10000 || sallary.value > 16000) {
        document.getElementById("sallary").setAttribute("placeholder", 'unvalid sallary') 
        document.getElementById("sallary").style = 'border: 2px solid red'
        document.getElementById("sallary").value=""
        count++
    }else{
        document.getElementById("sallary").style = 'border: 2px solid green'
    }
    if (!(birthDay.value)) {
        document.getElementById("birthday").setAttribute("placeholder", 'unvalid birthday') 
        document.getElementById("birthday").style = 'border: 2px solid red'
        document.getElementById("birthday").value=""
        count++
    }else{
        document.getElementById("birthday").style = 'border: 2px solid green'
    }

    if (phoneNum.value.length != 10) {
        document.getElementById("phonenum").setAttribute("placeholder", 'unvalid phone number') 
        document.getElementById("phonenum").style = 'border: 2px solid red'
        document.getElementById("phonenum").value=""
        count++
    }else{
        document.getElementById("phonenum").style = 'border: 2px solid green'
    }
    if(count === 0){
        document.getElementById("signed").innerHTML = `Welcome ${name.value} you are now part of the family!`
    }else{
        document.getElementById("signed").innerHTML = ""
    }
}
