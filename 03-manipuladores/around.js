$(function () {

    //put all p inside a div
    $("p").wrapAll("<div>");

    //put span inside p
    $("p").wrapInner("<span>");

    //remove p
    $("span").unwrap("p");

    //put span inside h
    $("span").wrap("<h2>");
});
