var path = require("path");
var friends = require("../app/data/friends"); //used this for dev and debugging. not necessary in production

// Routing
module.exports = function (app) {
    //Route to homepage
    app.get("/", function (req, res) { //route for main/index page
        res.sendFile(path.join(__dirname, "../public/index.html"));
        console.log("'Home' served");
    });

    //Route to survey
    app.get("/survey.html", function (req, res) { //route for survey page
        res.sendFile(path.join(__dirname, "../public/survey.html"));
        console.log("'Survey' served");
    });

    app.get("/friends", function (req, res) { //route to dump contents of friends file in JSON to browser
        res.json(friends);
        for (i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
        }
    });

    app.get("*", function (req, res) { //route to catch any other nonsense user may input into route
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};
