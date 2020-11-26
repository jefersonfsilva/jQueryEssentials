(function () {
    $.fn.viacep = function (target, callback) {
        var input = this;
        input.on("keyup", function (e) {
            e.preventDefault();
            var cep = input.val();
            var len = cep.length;
            var url = "https://viacep.com.br/ws/" + cep + "/json/";

            if (len === 8) {
                $(target).html("<p class='load'>Aguarde, obtendo endereço</p>");
                $.getJSON(url, function (response) {
                    if (!response.erro) {
                        var viacep = "<p>";
                        viacep += response.logradouro + "<br>";
                        viacep += response.bairro + "<br>";
                        viacep += response.localidade + "/" + response.uf;
                        viacep += "</p>";

                        $(".load").fadeOut(200, function () {
                            $(this).remove();
                            $(target).html(viacep);
                        });

                        callback(response);

                    } else {
                        if ($(".load").length) {
                            $(".load").fadeOut(200, function () {
                                $(this).remove();
                                $(target).html("<p>Erro ao consultar o CEP.</p>");
                            });
                        } else {
                            $(target).html("<p>Erro ao consultar o CEP.</p>");
                        }

                        callback({
                            erro: "CEP não encontrado;"
                        })
                    }
                });
            }
        });
        
        return this;
    };
}(jQuery));