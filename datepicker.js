var i = 0;
var html = "";
var blocksPerRow = 7;
var months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", 
"Juli", "Augustus", "September", "Oktober", "November", "December"]
var currentMonth = 4
var monthHTML = `<a href="#" id='month'>${months[currentMonth]}</a>`

for (; i < 31; i++) {
    html += `<a href="https://www.ns.nl/reisplanner/#/?vertrek=Eindhoven%20Centraal&vertrektype=treinstation&aankomst=Amsterdam%20Centraal&aankomsttype=treinstation&type=vertrek&tijd=2020-05-05T16:55" class='test'>${i}</a>`;
}

var main = document.querySelector("main")
main.insertAdjacentHTML("afterbegin", monthHTML)
var monthField = document.querySelector("#month")

document.querySelector("#wrapper").innerHTML = html
document.querySelector(".test:nth-of-type(6)").classList.add("selected");
document.querySelector(".test:nth-of-type(1)").classList.add("hide");
document.querySelector(".test:nth-of-type(2)").focus()

document.querySelector("body").addEventListener("keydown", function (e) {
    // var thisIndex = $(".selected").index();
    var thisIndex = indexInParent(document.querySelector('.selected'))
    console.log(thisIndex)
    // console.log(thisIndex)
    var newIndex = null;
    if (e.keyCode === 75 || e.keyCode === 38) {
        // up
        newIndex = thisIndex - blocksPerRow;
    } else if (e.keyCode === 188 && currentMonth > 0){
        currentMonth --
        monthField.innerText = months[currentMonth]
    } else if (e.keyCode === 190 && currentMonth < 11){
        currentMonth ++
        monthField.innerText = months[currentMonth]
    } 
    else if (e.keyCode === 74 || e.keyCode === 40) {
        // down
        newIndex = thisIndex + blocksPerRow;
    } else if (e.keyCode === 76 || e.keyCode === 39) {
        newIndex = thisIndex + 1
    } else if (e.keyCode === 72 || e.keyCode === 37) {
        newIndex = thisIndex - 1
    }
    if (newIndex !== null) {
        // document.querySelectorAll(".test")[newIndex].classList.add("selected")
        $(".test").eq(newIndex).addClass("selected")
            .siblings().removeClass("selected");
    }
    if (thisIndex) {
        console.log("test")
        document.querySelector(".selected").focus()
    }

});

function indexInParent(node) {
    var children = node.parentNode.childNodes;
    var num = 0;
    for (var i = 0; i < children.length; i++) {
        if (children[i] == node) return num;
        if (children[i].nodeType == 1) num++;
    }
    return -1;
}
console.log(indexInParent(document.querySelector('.selected')));

function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}