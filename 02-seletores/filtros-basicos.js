$(function () {
        //filtra os que não tem a class p
        $("p:not('.p')").css("font-weight", "bold");

        //filtra o primeiro/último
        $("p:first").css("color", "red");
        $("p:last").css("color", "red");

        //filtra linhas ímpares
        $("p:even").css("background", "#eee");
        $("p:odd").css("background", "#ccc");

        //filtra linha específica
        $("p:eq(4)").text("jQueryEssentials");
        //filtra linhas posteriores
        $("p:gt(4)").text("Seletores GT");
        //filtra linhas anteriores
        $("p:lt(4)").text("Seletores LT");

        //pega os h1 dentro da div
        $(".list :header").css({
                "font-size": "1.4em",
                color: "#888"
        });

        //pega o span dentro da h1 dentro da div
        $(".list :header span").css("color", "blue");

        //anima e altera o texto
        function animar_el(elemento) {
                $(elemento).fadeToggle(400, function () {
                        animar_el(elemento);
                });
        }

        var num = 1;
        setInterval(function () {
                $(":animated").text(num);
                num ++;
        }, 800);

        animar_el(".list span");
        
        //altera o campo com foco
        $(":focus").css("background", "yellow");
        
        //pega o root do dom
        console.log($(":root"));
});
