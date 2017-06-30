var app =angular.module('myApp');

app.controller('gitHubDataController', function($scope,$http, gitHubDataFactory, $location) {
  $scope.username = gitHubDataFactory.username;
  $scope.changeUser = function() {


    gitHubDataFactory.changeUserName($scope.currentUser, setUser);
  }


  setUser = function(user) {
    $scope.userData = user;
    $scope.username = user.login;
    // $location.url(`/${user.login}`)
    repo();
  }

  var repo = function () {
    $http.get("https://api.github.com/users/"+$scope.username+'/repos')
          .then(function (data) {
            console.log("data");
              $scope.repoData = data.data;
              console.log($scope.repoData);
            });
  };

  repo();

  gitHubDataFactory.getUserData(setUser);

});
