console.log("this is the factory");

app.factory('gitHubDataFactory',['$http', function($http) {

  var factory = {};
  factory.username= "Nucya";

  factory.changeUserName=function(name, callback) {
    factory.username= name;
    factory.getUserData(callback)
  }

  factory.getUserData = function (callback) {
    $http.get("https://api.github.com/users/"+factory.username).then(function(data) {
      factory.userData = data.data;

      callback(factory.userData)

    });
  }

  return factory;
}]);
