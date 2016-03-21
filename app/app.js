define(['angularAMD', 'angular-route', 'js/services/module','js/controllers/module', 'js/directives/module'], function (angularAMD) {
    var app = angular.module("angular-amd",
        [
            'ngRoute',
            'angular-amd-controllers',
            'angular-amd-services',
            'angular-amd-directives'
        ]);

    const CONTROLLER_VIEW_MODEL_NAME = 'vm';
    const CONTROLLER_BASE_PATH = 'js/controllers';
    const VIEWS_BASE_PATH = 'app/views/partials';

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/home", angularAMD.route({
                templateUrl: VIEWS_BASE_PATH + '/view_home.html',
                controller: 'HomeController',
                controllerUrl: CONTROLLER_BASE_PATH + '/HomeController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            }))
            .when("/login", angularAMD.route({
                templateUrl: VIEWS_BASE_PATH + '/login.html',
                controller: 'LoginController',
                controllerUrl: CONTROLLER_BASE_PATH + '/LoginController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            }))
            .when("/view1", angularAMD.route({
                templateUrl: VIEWS_BASE_PATH + '/view_view1.html',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            }))
            .otherwise({redirectTo: "/home"})
    });
    
    return angularAMD.bootstrap(app);
});