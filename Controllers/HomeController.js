const hi = "";

exports.Index = async function(request, response) {
  response.render("Home/Index", { hi: "" });
};

// Handles 'POST' with userinput form submission
exports.MakeText = async function(request, response) {
  let userInput = await request.body.userinput;
  console.log(userInput);

  response.render("Home/Index", { hi: userInput });
};
