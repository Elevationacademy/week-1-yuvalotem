//  console.log(document)
//  document.getElementById("playing-field").style.backgroundColor = "blue"
// const playingField = document.getElementById("playing-field")
// console.log(playingField);
// const down = document.getElementById("down")
// console.log(down);
// down.innerHTML = "Down"
// console.log(down.innerHTML)
// console.log(playingField.innerHTML)
// console.log(playingField.style.backgroundColor);
// document.getElementById("block").style.backgroundColor = "yellow"
//console.log(document.getElementById("block").style.left);

// const moveRight = function(){
//     if(document.getElementById("block").style.left == ''){
//         document.getElementById("block").style.left = "15px"
//     }else {
//     left = parseInt(document.getElementById("block").style.left) 
//     left += 15
//     left += 'px'
//     document.getElementById("block").style.left = left
//     }

//   }

// const header = document.createElement("h1")
// header.innerHTML = "The Best Game Ever"
// header.style.color = "#c0392b"
// header.style.fontFamily = "Helvetica"
// header.setAttribute("class", "my-header")
// document.body.appendChild(header)

// const subHeader = document.createElement("h2")
// subHeader.innerHTML = "game by: yuval lotem"
// subHeader.setAttribute("class", "subheader")
// document.body.appendChild(subHeader)


// const box = document.getElementById("box")

// const enterColor = function () {
//     box.style.backgroundColor = "#c0392b"
//     box.innerHTML = "AHH GO AWAY"
// }

// const leaveColor = function () {
//     box.style.backgroundColor = "#1abc9c"
//     box.innerHTML = "Hover over me!"
// }

// const clickColor = function () {
//     box.style.backgroundColor = "#8e44ad"
// }

// const addLi = function(){
// const list = document.getElementById("list")
// const newLi = document.createElement("li")
// newLi.innerHTML = "new item"
// newLi.setAttribute("onclick" , "addLi()")
// document.getElementById("list").appendChild(newLi)
// }
//  const newdiv = document.getElementById("newdiv")
//  newdiv.onclick = function(){
//      newdiv.style.backgroundColor = "gray"
//  }
//  newdiv.onmouseenter = function(){
//     newdiv.style.backgroundColor = "purple"
// }
// newdiv.onmouseleave = function(){
//     newdiv.style.backgroundColor = "ivory"
// }


rightArr = document.getElementById("right")
const moveRight = function(){
    if (document.getElementById("block").style.left != '85%') {
        if (document.getElementById("block").style.left == '') {
            document.getElementById("block").style.left = "5%"
        } else {
            let left = parseInt(document.getElementById("block").style.left)
            left += 5
            left += '%'
            document.getElementById("block").style.left = left
        }
    }
}
rightArr.onclick = moveRight;


leftArr = document.getElementById("left") 
const moveLeft = function () {
    if (document.getElementById("block").style.left != '' && document.getElementById("block").style.left != '0%') {
        let left = parseInt(document.getElementById("block").style.left)
        left -= 5
        left += '%'
        document.getElementById("block").style.left = left
    }
}
leftArr.onclick = moveLeft

downArr = document.getElementById("down")
const moveDown = function () {
    if (document.getElementById("block").style.top != '80%') {
        if (document.getElementById("block").style.top == '') {
            document.getElementById("block").style.top = "5%"
        } else {
            let top = parseInt(document.getElementById("block").style.top)
            top += 5
            top += '%'
            document.getElementById("block").style.top = top
        }
    }
}
downArr.onclick = moveDown

upArr = document.getElementById("up")
const moveUp = function () {
    if (document.getElementById("block").style.top != '' && document.getElementById("block").style.top != '0%') {
        let up = parseInt(document.getElementById("block").style.top)
        up -= 5
        up += '%'
        document.getElementById("block").style.top = up
    }
}
upArr.onclick = moveUp



document.onkeydown = checkKey;
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        moveUp()
    }
    else if (e.keyCode == '40') {
        moveDown()
    }
    else if (e.keyCode == '37') {
       moveLeft()
    }
    else if (e.keyCode == '39') {
        moveRight()
    }

}