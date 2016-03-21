define([], function () {
	'use strict';
	
	function LoginController($scope, userIdentityService) {
		$scope.user = {};
		$scope.login = function(user) {
			console.log($scope);
			console.log(user);
			userIdentityService.login(user.email, user.password)
		}
	}
	return ['$scope', 'userIdentityService', LoginController];
});