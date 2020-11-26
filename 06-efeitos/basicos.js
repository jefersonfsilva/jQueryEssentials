$(function () {
    var btn = $(".button");
    var timeEffect = 3500;

    btn.on("click", function (e) {
        e.preventDefault();

        $(".hide").stop().hide(timeEffect);
        
        //function is not necessary
        $(".show").stop().show(timeEffect, function(){
            console.log("Done!");
        });
        
        $(".toggle").stop().toggle(timeEffect);
    });
});
