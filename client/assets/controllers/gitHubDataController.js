var app= angular.module('myApp')
angular.module('myApp')
    app.controller('gitHubDataController', ['$scope','$http', function($scope,$http) {
        $scope.username = "Nucya";
        $http.get("https://api.github.com/users/"+$scope.username)
            .then(function (data) {
                $scope.userData = data.data;
            });
}]);
