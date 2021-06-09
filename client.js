function consultarRestaurantes() {
    // noinspection JSUnusedGlobalSymbols
    $.ajax({
        url: "http://api.algafood.local:8080/restaurantes",
        type: "get",
        headers: {
            "X-Teste": "Abc"
        },

        success: function (response) {
            $("#conteudo").text(JSON.stringify(response));
        }
    });
}

function fecharRestaurante() {
    // noinspection JSUnusedGlobalSymbols
    $.ajax({
        url: "http://api.algafood.local:8080/restaurantes/1/fechamento",
        type: "put",

        success: function (response) {
            alert("Restaurante foi fechado!");
        }
    });
}

$("#botao").click(consultarRestaurantes);