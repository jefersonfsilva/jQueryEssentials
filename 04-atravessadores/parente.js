$(function () {
    //child elements
    $(".article").children().css("font-family", "Open Sans, Serif");
    $(".article").children(".article_content").css("margin-bottom", "30px");
    $(".article_content").children("p").css("font-size", "0.8em");

    //brothers
    $(".article_content p").siblings().css("color", "#777");
    $(".article_content p").siblings(".a").css("color", "#09f");

    //parents
    $(".article_content b").parent().css({
        padding: "10px",
        background: "#fafafa"
    }).parent("div").css({
        "padding-bottom": "15px",
        "border-bottom": "5px solid #ddd"
    });

    $("p").on("click", function () {
        //$(this).parents().toggleClass("active");
        $(this).parents("body").toggleClass("active");

        var data = new Date();
        $(".date").remove();
        $(this).parents("div:last").append("<div class='date'>" + data.getUTCDate() + "/" + data.getUTCMonth() + "/" + data.getUTCFullYear() + "</div>");

        console.log($(this).parents());
    });

    $("b").closest("p").css("border-top", "1px solid #09f");

    console.log($(".a").parents(".article"));
    console.log($(".a").parentsUntil(".article"));
    console.log($(".a").parentsUntil("body", "article"));
});
