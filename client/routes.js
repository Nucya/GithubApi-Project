console.log('routes');
var path = require('path');
var users = require('./../controller/users.js')

module.exports = functions(app){
  app.get('/users', user.username);
};
