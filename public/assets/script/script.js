$("#submitButton").on("click", function (event) {
    // Don't reload the page on click event
    event.preventDefault();

    var newUser = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: [
            $("#sel1").val(),
            $("#sel2").val(),
            $("#sel3").val(),
            $("#sel4").val(),
            $("#sel5").val(),
            $("#sel6").val(),
            $("#sel7").val(),
            $("#sel8").val(),
            $("#sel9").val(),
            $("#sel10").val()
        ],
    };


    $.post("app/data/friends", newUser, function (data) {
        console.log(newUser);
    }).done(function (data) {
        console.log("Name of matched user: " + data.name);
        console.log("Image link of matched user: " + data.photo);
        $("#matchedUser.name").html("<p>" + data.name + "<p>"); //jQuery to add _name_ info to modal
        $("#matchedUser.photo").html("<img src= '" + data.photo + "'>"); //jQuery to add _user image_ info to modal
    });

    $("form").trigger("reset");

});

