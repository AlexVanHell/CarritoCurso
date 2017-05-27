var app = angular.module('aplicacion', []);

app.controller('loginCtrl', function($scope, $http) {
	$scope.mail = "";
	$scope.pass = "";

	$scope.loguea = function(){
		$http({
			method: 'GET',
			url: '/login',
			params: {
				mail: $scope.mail,
				contra: $scope.pass
			}
		}).then(
			function success(data){

				alert('Ya te logueaste');
				location.href = '/';

			},
			function error(err){

				alert('Hubo un error mijo');

			}
		)
	}
})