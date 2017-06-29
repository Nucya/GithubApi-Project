var app= angular.module('myApp')
angular.module('myApp')
    app.controller('gitHubRepoController', ['$scope','$http', function($scope,$http) {
      $scope.predicate = '-updated_at';

      var repo = function () {
        console.log("in repo function");
        console.log($scope.username);
        $http.get("https://api.github.com/users/"+$scope.username+'/repos')
              .then(function (data) {
                console.log(data);
                  $scope.repoData = data.data;
                  console.log($scope.repoData);
                });
      };

      repo();
    }]);
