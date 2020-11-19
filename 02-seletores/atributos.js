$(function () {
        //select all elements with class
        $("[class]").css("background", "#ccc");
        
        //select a specific one
        $("[data-upinside='true']").css("background", "#336699");
        
        //equal
        $("[title='UpInside']").css("background", "#009900");
        
        //different
        $("a[title!='UpInside']").css("background", "#aabbcc");
        
        //start like
        $("[class^='jquery']").css("background", "#0077ff");
        
        //ends like
        $("[class$='div']").css("color", "#fff");
        
        //has something
        $("[class*='r']").css("font-weight", "bold");
        
        //has specific
        $("[class~='jquery']").css("text-transform", "uppercase");
        
        //followed by hifen
        $("[class|='jquery-essentials']").css("border-bottom", "3px solid orange");
        
        //double filter
        $("[class*='jquery'][data-upinside]").css("color", "yellow");
});
