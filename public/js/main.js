var dayNumberOne = document.querySelector("#firstDayNumber")
var dayNumberTwo = document.querySelector("#secondDayNumber")
var numberOne = 1;
var numberTwo = 5;
var month = document.querySelector("#Month")
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var i = 3;
var year = 2020;
var yearSelection = document.querySelector("#Year")


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
    } else if (e.code === "Enter"){
        window.location.replace("/done");
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


//set audio volume to 0.1
function setVolume(){
var Soty = document.querySelector("#SoTY")
Soty.volume = 0.1;
}

yearSelection.addEventListener("keydown", function(e){
    if (year > 2019) {
        document.querySelector("#audio").innerHTML = '<h2>Song of the year: </h2><h1>Five Finger Death Punch - Living the Dream</h1><audio id="SoTY" controls><source src="/audio/(2020) Five Finger Death Punch - Living the Dream.mp3" type="audio/mpeg">/audio>'
        setVolume()
    } else if (year > 2018){
        document.querySelector("#audio").innerHTML = '<h2>Song of the year: </h2><h1>Slipknot - Unsainted</h1><audio id="SoTY" controls><source src="/audio/(2019) Slipknot - Unsainted.mp3" type="audio/mpeg"></audio>'
        setVolume()
    } else if (year > 2017){
        document.querySelector("#audio").innerHTML = '<h2>Song of the year: </h2><h1>Judas Priest - Lightning Strike</h1><audio id="SoTY" controls><source src="/audio/(2018) Judas Priest - Lightning Strike.mp3" type="audio/mpeg"></audio>'
        setVolume()
    }
    if (e.code === "ArrowUp") {
        year ++
        yearSelection.innerText = year
    } else if (e.code === "ArrowDown"){
        year --
        yearSelection.innerText = year
    }
})

