var app= angular.module('myApp');

app.controller('gitHubRepoController', function($scope,$http, gitHubDataFactory) {

  var repo = function () {
    $scope.username = gitHubDataFactory.username;
    $http.get("https://api.github.com/users/"+$scope.username+'/repos')
          .then(function (data) {
            console.log("data");
              $scope.repoData = data.data;
              console.log($scope.repoData);
            });
  };

  repo();
});
