angular.module('hercules').controller('QuestionIndexController', function ($timeout, $scope, QuestionAPIService, $mdToast, $mdDialog) {

    $scope.selected = [];

    var getQuestions = function () {
        QuestionAPIService.getAll().success(function (result) {
            $scope.questions = result;
        });
    };
    
    $scope.delete = function (question, ev) {

        showConfirmDeleteDialog(ev).then(function () {

            QuestionAPIService.delete(question.theme, question._id)
                .success(function (result) {
                    getQuestions();
                    showToast('Registro excluído com sucesso.');
                })
                .error(function () {
                    showToast('Não foi possível excluir o registro.')
                });

        });

    };
    
    var showToast = function (message) {
        $mdToast.show(
            $mdToast.simple()
                .textContent(message)
                .position('right bottom')
                .hideDelay('2000')
        )
    };

    var showConfirmDeleteDialog = function (ev) {

        var confirm = $mdDialog.confirm()
            .title('Deseja realmente excluir este registro?')
            .textContent('Você não poderá recuperá-lo mais tarde.')
            .targetEvent(ev)
            .ok('Sim')
            .cancel('Não');

        return $mdDialog.show(confirm);
    };

    getQuestions();

});