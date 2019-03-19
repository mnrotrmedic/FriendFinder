//Require info from friends.js [friends array] in data folder
var friends = require("../app/data/friends");

module.exports = function (app) { //route to display all friends data in json if this path is navigated to b the user
    app.get("/app/data/friends", function (req, res) {
        res.json(friends);
        console.log(friends);
    });

    app.post("/app/data/friends", function (req, res) {
        var newUser = req.body;
        var compatibilityScore = 50; //ten questions, 'best' answer is 5
        var matchedUser = {}; //declare variable object for matched friend when found
        console.log(newUser);

        // for (i = 0; i < friends.length; i++) {//for each object in friends array
        //     var compDiff = 0; //declare variable of 'compatibility Difference' Zero is a 'prefect' score in this instance
        //     for (j = 0; friends[i].scores.length; j++) {
        //         compDiff += Math.abs(newUser.scores[i] - friends[i].scores[j]); //absolute value of each score when new user is compared against all others in array
        //     }
        //     if (compDiff <= compatibilityScore) { //if the score is less/equal the current max score
        //         matchedUser = friends[i]; //that user becomes current matched user
        //         compatibilityScore = compDiff; //and the current compatibility score becomes the one to beat
        //     }
        //     else { console.log("That didn't work") };
        // }
        // friends.push(newUser);//add the new user to the friends array for future matching
        res.json(matchedUser);//return the best score (or last user that matches the best score) to the browser for use
    });
}