var path = require("path");

// Routing
module.exports = function (app) {
    //Route to homepage
    app.get("/", function (req, res) { //route for main/index page
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    //Route to survey
    app.get("/survey.html", function (req, res) { //route for survey page
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("*", function (req, res) { //route to catch any other nonsense user may input into route
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};
