

var users = [
    {
        "name": "Judy",
        "photo": "https://i.pinimg.com/736x/d9/a5/0f/d9a50fa8ce4ace7ff705d573d3690580.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }
]

$("#submitButton").click(function (event) {
    // Don't reload the page on click event
    event.preventDefault();

    // $("form").trigger("reset")

    var newUser = {
        "name": $("#name").val().trim(),
        "photo": photoLink = $("#photo").val().trim(),
        "scores": [
            quest1 = $("#sel1").val(),
            quest2 = $("#sel2").val(),
            quest3 = $("#sel3").val(),
            quest4 = $("#sel4").val(),
            quest5 = $("#sel5").val(),
            quest6 = $("#sel6").val(),
            quest7 = $("#sel7").val(),
            quest8 = $("#sel8").val(),
            quest9 = $("#sel9").val(),
            quest10 = $("#sel10").val()
        ]
    };
    console.log(newUser);
});