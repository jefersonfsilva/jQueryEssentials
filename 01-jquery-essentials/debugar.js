$(function () {
        $(".jquery_essentials").html("jQuery Essentials!");

        console.group("Mensagens Gerais");
        console.log("jQuery Essentials");
        console.info("Carregado com sucesso!");
        console.warn("Um alerta");
        console.error("Um erro");
        console.groupEnd();

        var cadastro = false;

        console.group("Cadastro de usuários");
        console.info("Cadastro iniciado");

        if (cadastro === true) {
                console.log("Cadastro Realizado");
        } else {
                console.warn("Erro ao Cadastrar");
        }
        console.groupEnd();
});
