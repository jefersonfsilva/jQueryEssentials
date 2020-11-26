$(function () {
    //normalizeH("div div");
    //normalizeH("div .p");

    normalizeH(".normalize");
    $(window).resize(function () {
        normalizeH(".normalize");
    });


    //FUNCTION V2
    function normalizeH(element) {
        var maxHeight = {};
        $.each($(element).parent(), function (i, e) {
            $(e).find(element).css("height", "auto");
            maxHeight = $(e).find(element).map(function (ie, el) {
                return $(el).height();
            }).get();

            $(e).find(element).height(Math.max.apply(this, maxHeight));
            //console.info(maxHeight);
        });
    }

    //FUNCTIONS
    function normalizeH_back(element) {
        //$(element).css("height", "auto");
        var maxHeight = $(element).map(function (i, e) {
            return $(e).height();
        }).get();

        $(element).height(Math.max.apply(this, maxHeight));
        //console.info(maxHeight);
    }
});
