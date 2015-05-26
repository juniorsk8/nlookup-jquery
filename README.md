# nlookup-jquery
Nice lookup plugin for jQuery

== Requeriments ==
jQuery 1.x
DataTables
MagnificPopup

== How to use ==
$.fn.nLookup({
                    colunas: [
                        {'label': 'Código', 'campo': 'id'},
                        {'label': 'Nome', 'campo': 'nome'},
                        {'label': 'Telefone', 'campo': 'telefone1'},
                        {'label': 'Celular', 'campo': 'telefone2'}
                    ],
                    url: '/admin/correntistas.json',
                    onSelecionar: function (data) {
                        // Action will be executed when a register is selected
                    }
                });