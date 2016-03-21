define(['angular','js/controllers/HomeController', 'js/controllers/LoginController', 'js/controllers/NavigationController'],
    function (angular,HomeController, LoginController, NavigationController) {
        var module = angular.module('angular-amd-controllers', ['angular-amd-services']);
        module.controller('HomeController', HomeController);
        module.controller('LoginController', LoginController);
        module.controller('NavigationController', NavigationController);
        return module;
    }
);