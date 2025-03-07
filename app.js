var express = require("express");
var http = require("http");
var path = require("path");
var engine = require("ejs-locals");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Enable routing and use port 3000.
require("./router")(app);
app.listen(process.env.PORT || 3000, function() {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});

// Set up ejs templating.
app.engine("ejs", engine);
app.set("view engine", "ejs");

// Set path for views
app.set("views", path.join(__dirname, "Views"));

// Allow linking to static files
app.use(express.static(path.join(__dirname, "static")));

app.get("/", function(req, res) {
  res.render("Home/Index"); // load the index.ejs file
});

// This is placed last in series of request handlers
app.get("*", function(request, response) {
  response.send("Error: Page does not exist.");
});
