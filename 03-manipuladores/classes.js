$(function () {
    //class
    $("p").css("color", "#006699");
    $("p").css({
        color: '#555'//,
                //"border-bottom": "1px solid #ccc"
    });

    //attribute
    $(".segunda").attr("id", "segundo");
    console.log($(".segunda").attr("id"));

    //property
    console.warn($("input").prop("checked"));
    //attribute
    console.warn($("input").attr("checked"));
    //value
    $("input").val("nome");
    console.warn($("input").val());

    //clone and modify
    $(".segunda").clone().appendTo("body").html("<b>#BoraProgramar</b>");

    //add/remove class
    $("div").on("click", function () {
        //$(this).toggleClass("add");
        
        if ($(this).hasClass("add")) {
            $(this).removeClass("add");
            $(this).find("p").slideUp();
            $("input").removeAttr("checked");
        } else {
            $(this).addClass("add");
            $(this).find("p").slideDown();
            $("input").attr("checked", "checked");
        }
    });
});
