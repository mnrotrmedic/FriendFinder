//Require info from friends.js [friends array] in data folder
var friends = require("../app/data/friends");

module.exports = function (app) { //route to display all friends data in json if this path is navigated to by the user
    app.get("/app/data/friends", function (req, res) {
        res.json(friends);
        console.log(friends);
    });

    app.post("/app/data/friends", function (req, res) {
        var newUser = req.body;
        var compatibilityScore = 50; //ten questions, 'best' answer is 5
        var matchedUser = {}; //declare variable object for matched friend when found
        console.log("New user score: " + newUser.scores);
        // console.log(friends.length);

        for (var i = 0; i < friends.length; i++) {
            var newCompatibilityScore = 0; //Set a temporary score 
            for (var j = 0; j < friends[i].scores.length; j++) {
                newCompatibilityScore += Math.abs((newUser.scores[j]) - friends[i].scores[j]);
                console.log("New compatibility score: " + newCompatibilityScore);
            }
            if (newCompatibilityScore < compatibilityScore) {
                matchedUser = friends[i];
                console.log(matchedUser);
            }
        }

        friends.push(newUser);//add the new user to the friends array for future matching
        res.json(matchedUser);//return the best score (or last user that matches the best score) to the browser for use
    });
}