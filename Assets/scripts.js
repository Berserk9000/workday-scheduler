$(document).ready(function() {

    // Adding current date jumbotron
    $("#currentDay").text(moment().format("MMMM Do YYYY"));
    
    
    let description = $(".description");
    let saveButton = $(".saveBtn");
    let currentHour = moment().hour();
    
    console.log(currentHour);
    console.log(typeof currentHour);

// Color coding time blocks.
description.each(function () {
    let timeBlock = parseInt($(this).attr("id"));

    if (timeBlock === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
    }
    else if (timeBlock < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }
    else {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
    }
});

});