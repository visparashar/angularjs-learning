var myApp = angular.module('myApp',[]);
myApp.controller('MyController',function MyController($scope ,$http){

	$http.get('D:/angular-workspace/src/data.json').success(function(data){
		$scope.artists=data;
	})
	});