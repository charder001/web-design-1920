var i = 0;
var html = "";
var blocksPerRow = 7;


for (; i < 30; i++) {
    html += `<a href="#" class='test'>link</a>`;
}

$("#wrapper").append(html).children(":first").addClass("selected");
document.querySelector(".test:first-of-type").focus()

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
    if (thisIndex){
        console.log("test")
        $(".selected").focus()
    }

});