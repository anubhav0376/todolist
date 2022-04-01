const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
var items = ["Buy Food","Cook Food","Eat Food"];
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function(req, res) {

  var today=new Date();
  var options={
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  var day =today.toLocaleDateString("en-US",options);
res.render("list",{kindOfDay: day,newlistItem:items});
});
app.post("/", function(req, res) {
  var Item = req.body.Item1;
  items.push(Item);
  res.redirect("/");
});

app.listen("300", function() {
  console.log("working on port 300");
});
