 define([], function () {
     'use strict';
     function navigationDirective() {
         return {
             restrict: 'A',
             templateUrl: 'app/views/directives/navigationDirective.html',
             controller: 'NavigationController',
             controllerAs: 'vm'
         }
     }

     return navigationDirective;
 });