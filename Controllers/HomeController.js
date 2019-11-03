const hi = "";

exports.Index = async function(request, response) {
  response.render("Home/Index", { hi: "" });
};

// Handles 'POST' with userinput form submission
exports.MakeText = async function(request, response) {
  let userInput = await request.body.userinput;
  console.log(userInput);
  var transformedInput = "";

  if (userInput) {
    for (var i = 0; i < userInput.length; i++) {
      if ((i + 1) % 2 > 0) {
        transformedInput += userInput.charAt(i).toUpperCase();
      } else {
        transformedInput += userInput.charAt(i).toLowerCase();
      }
    }
  }

  response.render("Home/Index", { hi: transformedInput });
};
