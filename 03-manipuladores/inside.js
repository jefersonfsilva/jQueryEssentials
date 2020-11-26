$(function () {
    //get text
    var text = $(".j").text();
    //get formatted text
    var html = $(".j").html();

    //build some content
    $(".e").append("<p>Text: " + text + "</p>");
    $(".e").append("<p>HTML: " + html + "</p>");
    $(".a").appendTo(".e");

    //add to some place
    $("<p><b>#BoraProgramar!</b></p>").appendTo($(".e"));

    //add to the beginning
    $(".e").prepend("<h2>Resultados:</h2>");
    //
    $("<p>Exemplos:</p>").prependTo($(".e p:first"));

});
