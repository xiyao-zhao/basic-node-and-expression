var express = require('express');
var app = express();

/* 1) Meet the node console */
console.log("Hello World");

/* 2) First working express server */
/*app.get("/", function(req, res) {
    res.send("Hello Express");
})*/

/* 3) Serve an HTML file */
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
})

/* 4) Serve static assets */
app.use("/public", express.static(__dirname + "/public"));


/* 5) Serce JSON on a specific route */
/*app.get("/json", function(req, res) {
    res.json({"message": "Hello json"});
});*/

/* 6) Use the .env file to configure the app */
app.get("/json", function(req, res) {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({"message": "Hello json".toUpperCase()});
    } else res.json({"message": "Hello json"});
})






































 module.exports = app;
