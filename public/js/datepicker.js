var i = 0;
var html = "";
var blocksPerRow = 7;


for (; i < 31; i++) {
    html += `<a href="day/${i}" class='test'>${i}</a>`;
}


document.querySelector("#wrapper").innerHTML = html
document.querySelector(".test:nth-of-type(2)").classList.add("selected");
document.querySelector(".test:first-of-type").classList.add("hide");
document.querySelector(".test:nth-of-type(2)").focus()

document.querySelector("body").addEventListener("keydown", function (e) {
    var thisIndex = $(".selected").index();
    var newIndex = null;
    if (e.keyCode === 75 || e.keyCode === 38) {
        // up
        newIndex = thisIndex - blocksPerRow;
    } else if (e.keyCode === 74 || e.keyCode === 40) {
        // down
        newIndex = thisIndex + blocksPerRow;
    } else if (e.keyCode === 76 || e.keyCode === 39) {
        newIndex = thisIndex + 1
    } else if (e.keyCode === 72 || e.keyCode === 37) {
        newIndex = thisIndex - 1
    }
    if (newIndex !== null) {
        $(".test").eq(newIndex).addClass("selected").siblings().removeClass("selected");
    }
    if (thisIndex) {
        console.log("test")
        document.querySelector(".selected").focus()
    }

});