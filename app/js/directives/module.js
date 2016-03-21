define(['angular','js/directives/navigationDirective'],
    function (angular, navigationDirective) {
        var module = angular.module('angular-amd-directives', []);
        module.directive('navigationDirective', navigationDirective);
        return module;
    }
);