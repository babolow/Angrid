angular.module('demo', [])
.controller('InfoAPIController', function ($scope, $http) {
    $http.get('http://localhost:57347/api/values/4').
        then(function (response) {
            $scope.titi = response.data;
        });
});