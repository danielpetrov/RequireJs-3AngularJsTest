define([], function () {
	'use strict';
	
	function NavigationController($scope, userIdentityService) {
		//$scope.showMenu = UserIdentityService.isLogged();
		$scope.showMenu = true;
		$scope.message = 5;
		var vm = this;
		vm.message = 'pesho';
	}
	
	return ['$scope', 'userIdentityService', NavigationController];
});