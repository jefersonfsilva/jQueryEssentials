$(function () {
    var btn = $(".button");
    var effect_time = 350;

    btn.on("click", function (e) {
        e.preventDefault();

        var fade = $(".fade");
        var fade_close = $(".fade_close");

        //IN|OUT
        fade.fadeIn(effect_time, function () {
            fade_close.on("click", function () {
                fade.fadeOut(effect_time, function () {
                    //$(this).remove();
                });
            });
        }).css("display", "flex");

        //TOGGLE
        fade.find("p").on("click", function (e) {
            if (e.target === this) {
                $(this).find("b").stop().fadeToggle(effect_time);
            }
        });

        //TO
        fade.find("b").on("click", function () {
            if ($(this).hasClass("active")) {
                $(this).fadeTo(effect_time, 0.5, function () {
                    console.log($(this));
                    $(this).removeClass("active");
                });
            } else {
                $(this).fadeTo(effect_time, 1, function () {
                    console.log($(this));
                    $(this).addClass("active");
                });
            }
        })
    });
});
