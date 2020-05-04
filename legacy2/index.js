const app = require("express")()
const express = require("express")
const port = process.env.PORT || 3000
var http = require('http').createServer(app)
var day = "";

app.set("view engine", "ejs")
app.set("views", "views")

app.use(express.static("public"))

app.get('/', function (req, res) {
    res.render("home")
});

app.get('/datepicker', function (req, res) {
    res.render("datepicker")
});

app.get('/day/:id', function (req, res) {
    day = req.params.id
    res.render("hour", {day: day})
});


http.listen(port, function () {
    console.log(`Application started on port: ${port}`)
})

