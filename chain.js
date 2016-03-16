var _= require("lodash");

var words = ['Test', 'Hello', 'World', 'Node', 'JavaScript'];

module.exports = function(words) {
  return _.chain(words)
          .sortBy()
          .map(function(word) {
            return word.toUpperCase() + 'CHAINED';
          });
        };
