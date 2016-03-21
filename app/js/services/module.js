define(['angular','js/services/userIdentityService'], function(angular, userIdentityService) {
    var module = angular.module('angular-amd-services', []);
    module.factory('userIdentityService', userIdentityService);
    return module;
});