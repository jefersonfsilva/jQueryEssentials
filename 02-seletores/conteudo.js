$(function () {
        //get p that has something inside
        $("p:parent").css("background", "red");
        
        //set a text on empty p
        $("p:empty").html("Este está vazio");
        
        //look for a content
        $("p:contains('Essentials')").css("color","white");
        
        //look for a child element
        $("p:has('b')").text("É este aqui");
});
