$(function () {
        //paragrafo dentro de article
        $("article p").css("color", "red");
        
        //qualquer elemento filho direto de article
        $("article > *").css("color", "blue");
        
        //um elemento seguido do outro
        $("div + *").css("background", "yellow");
        
        //elementos irmãos: iguais dentro do mesmo bloco
        $("div ~ p").text("Irmão");
});
