(function () {
    "use strict";

    // MODULO
    angular.module('listaComprasApp', []);

    // CONTROLLER
    angular.module('listaComprasApp')
           .controller("listaComprasController", listaCompraController);

    listaCompraController.$inject = ['$scope'];

    function listaCompraController($scope) {
        
        var vm = this;
        //var vm = listaCompraController;
        

        vm.itens = [
            { text: 'Arroz', feito: true },
            { text: 'Óleo', feito: true },
            { text: 'Macarrão', feito: false },
            { text: 'Pó de café', feito: false },
            { text: 'Leite', feito: false },
            { text: 'Feijão', feito: false }
        ];

        vm.restam = restam;
        vm.addProduto = addProduto;
        vm.limpar = limpar;

        function restam() {
            var count = 0;                                //Declaração de variável
            angular.forEach(vm.itens, function (item) {   //Laço forEach, 
                if (!item.adicionado) count++;                 //
            });
            return count;
        }

        function addProduto() {
            vm.itens.push({ text: vm.itemText, feito: false });
            vm.itemText = '';
        }

        function limpar() {
            // var oldTarefas = vm.tarefas;
            // vm.tarefas = [];

            // angular.forEach(oldTarefas, function (trf) {
            //     if (!trf.feito)
            //         vm.tarefas.push(trf);
            // });

            vm.itens = vm.itens.filter(function (item) { return !item.adicionado });
        }

    }

})();