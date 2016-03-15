var _= require("lodash");

var items =  [
                { article: 41,   quantity: 24 },
                { article: 2323, quantity: 2  },
                { article: 655,  quantity: 23 }
              ];

var quantitySort = function(items) {
  return _.sortBy(items, "quantity").reverse();
};

module.exports = quantitySort;

// Alternate solution:

// var sorting = function (collection) {
//       return _.sortBy(collection, function (item) {
//           return -item.quantity;
//       });
