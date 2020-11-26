$(function () {
    var el = $(".j");

    console.group("OFFSET");
    console.log(el.offset());
    console.log("TOP: " + el.offset().top);
    console.log("LEFT: " + el.offset().left);
    console.groupEnd();

    //relative to DOM
    var el_off = el.offset();
    el.after("<p class='offset'>Cords: Top: " + el_off.top + " Left: " + el_off.left + "</p>");
    $(".offset").offset({top: el_off.top + 30, left: el_off.left + 15});

    //relative to element
    console.group("POSITION");
    console.log(el.position());
    console.log("TOP: " + el.position().top);
    console.log("LEFT: " + el.position().left);
    console.groupEnd();

    console.group("SCROLL");
    $("body").outerWidth(3000).outerHeight(3000);
    $(window).scroll(function () {
        var el = $(this);
        console.log("TOP: " + el.scrollTop() + " | LEFT: " + el.scrollLeft());
    });
    console.groupEnd();
});
