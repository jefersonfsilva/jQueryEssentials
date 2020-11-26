$(function () {
    var speed = 777;

    //SHOW ALL
    $(".expand").on("click", function () {
        $(".slide_content").stop().slideDown(speed, function () {
            //action completed
        });
    });

    //HIDE
    $(".close").on("click", function () {
        $(".slide_content").stop().slideUp(speed, function () {
            //action completed
        });
    });

    //SHOW | HIDE
    $(".toggle").on("click", function () {
        $(".slide_content").stop().slideToggle(speed, function () {
            //action completed
        });
    });

    //ACCORDION
    $(".slide h4").on("click", function () {
        $(".slide_content").stop().slideUp(speed);
        $(this).parent().find(".slide_content").slideToggle();
    });
});
