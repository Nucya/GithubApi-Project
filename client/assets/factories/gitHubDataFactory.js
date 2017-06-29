console.log("this is the factory");
app.factory('gitHubDataFactory', ["$http", function($http){
  var gitHubDataFactory = function(){
    this.username =function(data, callback)
    {
      console.log("This is working")
      $http.post('/login', data) .then(callback);
    }
    this.index = function(callback) {
      $http.get("/users").then(callback);
    }
