// Import dependencies
var express = require("express");

// Variable to establish the port to use for the localhost
var PORT = process.env.PORT || 8080;

// Variable to use the express npm package
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request using JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import express handlebars variable
var exphbs = require("express-handlebars");

// Set express handlebars engines
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller");

// Set the app to use the routes
app.use(routes);

// Listener to start listening on a specfic port. Display message for the user letting them know of connection to localhost and port
app.listen(PORT, function() 
{
  console.log("App now listening at localhost:" + PORT);
});
