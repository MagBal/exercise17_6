var express = require("express");
var app = express();

app.set("view engine", "pug");
app.set("views", "./views");
app.use("/static", express.static("assets"));

app.get("/", function(req, res) {
  res.render("hoHo");
});

app.get("/auth/google", function(req, res) {
  res.render("logIn");
});

app.listen(3000);
app.use(function(req, res, next) {
  res.status(404).send("Sorry, we could not find what you want!");
});
