//Dependencies
var express = require("express");
var path = require("path");

//Server init
var app = express();
var PORT = process.env.PORT || 3010;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//Lets-A-Go <--In Mario Voice
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

//Allows use of statis assets
app.use(express.static('public'))