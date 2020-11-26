(function () {
    $.fn.normalize_h = function () {
        var element = this;
        var maxHeight = {};
        $.each(element.parent(), function (i, e) {
            $(e).find(element).css("height", "auto");
            maxHeight = $(e).find(element).map(function (ie, el) {
                return $(el).height();
            }).get();

            //console.info(maxHeight);
            $(e).find(element).height(Math.max.apply(this, maxHeight));
        });
    };
}(jQuery));
