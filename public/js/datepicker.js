var i = 0;
var html = "";
var blocksPerRow = 7;


for (; i < 31; i++) {
    html += `<a href="${i}" class='test'>${i}</a>`;
}

$("#wrapper").append(html).children(":nth-of-type(2)").addClass("selected");
$("#wrapper").children(":first").addClass("hide")
// document.querySelector(".test:first-of-type").focus()

$("body").on("keydown", function (e) {
    var thisIndex = $(".selected").index();
    var newIndex = null;
    if (e.keyCode === 38) {
        // up
        newIndex = thisIndex - blocksPerRow;
    } else if (e.keyCode === 40) {
        // down
        newIndex = thisIndex + blocksPerRow;
    } else if (e.keyCode === 39) {
        newIndex = thisIndex + 1
    } else if (e.keyCode === 37) {
        newIndex = thisIndex - 1
    }
    if (newIndex !== null) {
        $(".test").eq(newIndex).addClass("selected").siblings().removeClass("selected");
    }
    if (thisIndex) {
        console.log("test")
        $(".selected").focus()
    }

});