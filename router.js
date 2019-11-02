var HomeController = require("./Controllers/HomeController");

// rOUTES
module.exports = function(app) {
  // Main Routes
  app.get("/", HomeController.Index);
  app.post("/MakeText", HomeController.MakeText);
};
