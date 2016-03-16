var _= require("lodash");

var userInfo = {
                  name: "Penney",
                  login: [ 1407574431, 140753421, 140715429 ]
                };

var userGreeting = function(userInfo) {
  var greeting = 'Hello <%= name %> (logins: <%= login.length %>)';
  return _.template(greeting)(userInfo);
};

module.exports = userGreeting;
