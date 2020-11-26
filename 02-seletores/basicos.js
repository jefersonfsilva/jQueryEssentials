$(function () {
    //SELETOR DE ELEMENTO
    $("b").text("jQuery Essentials");

    //CLASS
    $(".jquery").css("color", "red");

    //ID
    $("#jquery").text("Id = jQuery");

    //ALL
    $("div *").css("border", "1px solid #ccc");

    //MÚLTIPLOS
    $(".jquery, b").css({
        background: "blue",
        color: "red",
        'border-radius': "4px",
        padding: "10px",
        'font-size': "1.4em"
    });

    $("b").add("p").css("font-size", "2em")
});
