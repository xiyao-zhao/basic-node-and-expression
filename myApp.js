var express = require('express');
var app = express();

/*app.get("/", function(req, res) {
    res.send("Hello Express");
})*/

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
})

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function(req, res) {
    res.json({"message": "Hello json"});
})

console.log("Hello World");



































 module.exports = app;
