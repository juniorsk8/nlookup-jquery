(function($) {

    $.fn.nLookup = function(opcoes) {
        var strCol = "";
        var dtCol = [];


        // parâmetros pré-definidos
        var params = $.extend({
            url: '',
            colunas: [],
            onSelecionar: function() {}
        }, opcoes);

        // Montar lista de colunas
        if(params.colunas != undefined) {
            $.each(params.colunas, function(key, value) {
                // Cabeçalho do grid
                strCol = strCol + '<th>' + value.label + '</th>';

                // Colunas do grid
                dtCol.push({'data' : value.campo });
            });

            // Adicionar coluna/campo de retornar objeto
            strCol = strCol + '<th>#</th>';
            dtCol.push({'data': 'id'});
        }

/*
        if (colunas != undefined) {
            var strCol = "";
            var dtCol = [];

            $.each(colunas, function (key, value) {
                var valoresColuna = value.split('=');
                var campoColuna = valoresColuna[0];
                var labelColuna = valoresColuna[1];

                // cabeçalho do grid
                strCol = strCol + '<th>' + labelColuna + '</th>';

                // colunas do grid
                dtCol.push({'data': campoColuna});
            });

            // Adicionar coluna/campo de retornar objeto
            strCol = strCol + '<th>#</th>';
            dtCol.push({'data': 'id'});
        }*/

        function get_colunas() {
            return strCol;
        }

        $.magnificPopup.open({
            items: {
                src: '<div class="popup-basic bg-none mfp-with-anim"><div class="panel">' +
                '<div class="panel-heading"><span class="panel-title">Selecionar registro</span></div>' +
                '<div class="panel-body"><table class="table table-striped table-hover datatable" id="tab_buscar">' +
                '<thead>' + get_colunas() + '</thead><tbody></tbody></table>' +
                '<div class="panel-footer text-right"><button class="btn btn-primary" onclick="$.magnificPopup.instance.close();">Fechar</button>' +
                '</div></div></div>',
                type: 'inline'
            },
            callbacks: {
                open: function () {
                    $('#tab_buscar').dataTable({
                        "ajax": {
                            "url": params.url,
                            "dataSrc": ""
                        },
                        "columns": dtCol,
                        "columnDefs": [
                            {
                                "render": function (data, type, row) {

                                    $("#" + data).on('click', function(){
                                        params.onSelecionar(row);
                                        $.magnificPopup.instance.close();
                                    });
                                    return '<a id="' + data + '" href="javascript:void()" onclick="" class="btn btn-xs btn-info btn-selecionar">Selecionar</a>';
                                },
                                "targets": dtCol.length - 1
                            }]
                    });
                }
            }
        });
    };
}(jQuery));
