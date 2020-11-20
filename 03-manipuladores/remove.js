$(function () {
    //delete element from DOM
    $(".b").fadeOut(2000, function () {
        $(this).remove();
    });

    //alter with delay
    $(".d").empty();
    setTimeout(function () {
        $(".d").text("#BoraProgramar!");
    }, 3000);

    //set a class
    $("p").on("click", function () {
        $(this).toggleClass("active");
    });

    //rem and add
    var p;
    $(".button").on("click", function () {
        if (p) {
            p.appendTo(".r");
            p = null;
        } else {
            p = $("p").detach();
        }
    });

    //replace element
    var href = $(".e").text();
    $(".e").replaceWith("<p><a target='_blank' href='https://" + href + "'>" + href + "</a></p>");
    
    //replace all
    $("<p>#BoraProgramar</p>").replaceAll("p");
});
