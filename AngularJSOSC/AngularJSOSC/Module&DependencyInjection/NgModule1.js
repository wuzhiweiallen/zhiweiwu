var helloModule=angular.module('HelloAngular', []);
helloModule.controller('HelloCtrl', ['$scope', function($scope){
	$scope.greeting = {
        text: 'Hello'
    };
}]);
