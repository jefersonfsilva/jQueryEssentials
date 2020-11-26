$(function () {
    //START
    $(".start").on("click", function (e) {
        e.preventDefault();

//        $(".animate").animate({"top": 500}, 777)
//                .animate({"left": 500}, 777)
//                .animate({"top": 0}, 777)
//                .animate({"left": 0}, 777);

        $(".animate").animate({"top": 500}, 777, function () {
            //run some code
        })
                .queue(function () {
                    $(this).css("background", "#f35").dequeue();
                })
                .animate({"left": 500}, 777)
                .queue(function () {
                    $(this).css("background", "#afa").dequeue();
                })
                .animate({"top": 0}, 777)
                .delay(350)
                .queue(function () {
                    $(this).css("background", "#abc").dequeue();
                })
                .animate({"left": 0}, 777)
                .queue(function () {
                    $(this).css("background", "#09f").dequeue();
                });
    });

    //STOP
    $(".stop").on("click", function (e) {
        e.preventDefault();

        $(".animate").stop(true, true);
    });

    //CLEAR
    $(".clear").on("click", function (e) {
        e.preventDefault();

        console.info($(".animate").queue());
        $(".animate").clearQueue();
        console.info($(".animate").queue());
    });

    //FINISH
    $(".finish").on("click", function (e) {
        $(".animate").finish();
    });
});
