var express = require('express');
var app = express();
var bodyParser = require('body-parser');

/* 1) Meet the node console */
console.log("Hello World");

/* 2) First working express server */
/*app.get("/", function(req, res) {
    res.send("Hello Express");
})*/

/* 7) Implement a Root-Level Request Logger Middleware */
// Place it before all the routes!
// One way
/*app.use(function(req, res, next) {
  let string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);
  next();
}); */

//Another way
app.use(function(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

/* 11) Parse POST request with body-parser */
// Place it before all the routes
app.use(bodyParser.urlencoded({ extended: false }));


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

/* 6) Use the .env file */
app.get("/json", function(req, res) {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({"message": "Hello json".toUpperCase()});
    } else res.json({"message": "Hello json"});
});

/* 8) Chain middleware to create a time server */
app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({time: req.time});
});

/* 9) Get route parameter input from the client */
app.get("/:word/echo", (req, res) => {
    res.json({ echo: req.params.word });
});

/* 10) Get query parameter input from the client */
app.get("/name", (req, res) => {
    res.json({ name: `${req.query.first} ${req.query.last}` });
});

/* 12) Get data from POST*/
app.post("/name", (req, res) => {
    res.json({ name: `${req.body.first} ${req.body.last}` });
});































 module.exports = app;
