define([], function () {
    function HomeController($scope) {
        $scope.message = "Message from HomeCtrl";
    }
    return ['$scope', HomeController];
});