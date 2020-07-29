var express = require("express");
const request = require("request");

var app = express();

app.get("/", (req, res) => {
    res.status(200).send("I am shyamal");
})

app.get("/test", (req, res) => {
    // if(!req.query.id){
    //     res.status(401).send({"message":"This is an error message"});
    // }
    res.status(500).send({"message":"This is error message"});
})

var server = app.listen(3000, ()=>{
    console.log("Listening to port " + server.address().port);
})

module.exports = server;

// var add = (x, y) => {
//     return x + y;
// }

// module.exports = add;