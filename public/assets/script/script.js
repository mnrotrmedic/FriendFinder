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
        setTimeout(function () {
            $("#matchedUserName").html("<h2>" + data.name + "</h2>"); //jQuery to add _name_ info to modal
            $("#matchedUserPhoto").html("<img src= '" + data.photo + "'>"); //jQuery to add _user image_ info to modal
        }, 500)
    });

    $("form").trigger("reset");

});

