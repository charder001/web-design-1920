var dayNumberOne = document.querySelector("#firstDayNumber")
var dayNumberTwo = document.querySelector("#secondDayNumber")
var numberOne = 1;
var numberTwo = 5;
var month = document.querySelector("#Month")
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var i = 3;

// dayNumberOne.addEventListener("focus", (function () {
//     dayNumberOne.classList.add("active")
// }))

// dayNumberOne.addEventListener("blur", (function () {
//     dayNumberOne.classList.remove("active")
// }))

// dayNumberTwo.addEventListener("focus", (function () {
//     dayNumberTwo.classList.add("active")
// }))

// dayNumberTwo.addEventListener("blur", (function () {
//     dayNumberTwo.classList.remove("active")
// }))

//Handle 10 increments
dayNumberOne.addEventListener("keydown", (function (e) {
    if (e.code === "ArrowUp" && numberOne < 3) {
        numberOne += 1;
        dayNumberOne.innerText = numberOne

    } else if (e.code === "ArrowDown" && numberOne > 0) {
        numberOne -= 1;
        dayNumberOne.innerText = numberOne
    } else if (e.code === "ArrowUp" && numberOne > 2 && numberTwo >= 1) {
        numberTwo = 0
        dayNumberTwo.innerText = numberTwo
    } else if (e.code === "ArrowDown" && numberOne < 1 && numberTwo <= 1) {
        numberTwo = 1
        dayNumberTwo.innerText = numberTwo
    }
}))

//handle day increments
dayNumberTwo.addEventListener("keydown", (function (e) {
    if (e.code === "ArrowUp" && numberTwo < 9 && numberOne < 3) {
        numberTwo += 1;
        dayNumberTwo.innerText = numberTwo
    } else if (e.code === "ArrowDown" && numberTwo > 0) {
        numberTwo -= 1;
        dayNumberTwo.innerText = numberTwo
    } else if (e.code === "ArrowUp" && numberTwo == 9 && numberOne < 3) {
        numberOne += 1
        numberTwo = 0
        dayNumberTwo.innerText = numberTwo
        dayNumberOne.innerText = numberOne
    } else if (e.code === "ArrowDown" && numberTwo == 0 && numberOne > 0) {
        numberOne -= 1
        numberTwo = 9
        dayNumberTwo.innerText = numberTwo
        dayNumberOne.innerText = numberOne
    }
}))

//Move focus on arrow key RIGHT or LEFT
document.addEventListener("keydown", function (e) {
    if (e.code === "ArrowRight") {
        console.log("next")
        document.querySelector(".move:focus").nextElementSibling.focus()
    } else if (e.code === "ArrowLeft") {
        console.log("previous")
        document.querySelector(".move:focus").previousElementSibling.focus()
    }
})

//change months on UP or DOWN arrow key press
month.addEventListener("keydown", function(e){
    if (e.code === "ArrowUp" && i < months.length -1) {
        i += 1
        month.innerText = months[i]
    } else if (e.code === "ArrowDown" && i > 0) {
        i -= 1
        month.innerText = months[i]
    }
})