var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var User     =   require("./models/user");
var router      =   express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));



app.listen(8080);
console.log("Listening to port 8080");