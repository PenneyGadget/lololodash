var _= require("lodash");

var articles =  [ { "article": 2323, "quantity": 4 },
                  { "article": 41, "quantity": 1 },
                  { "article": 2323, "quantity": 10 },
                  { "article": 655, "quantity": 2 },
                  { "article": 655, "quantity": 4 }
                ];

var articleCount = function(articles) {
  var result = [];

  var grouped = _.groupBy(articles, 'article');

  _.forEach(grouped, function(articles, name) {
    var total = _.reduce(articles, function(sum, article) {
      return sum + article.quantity;
    }, 0);

    result.push({ article: parseInt(name), total_orders: total });
  });

  return _.sortBy(result, 'total_orders').reverse();
};

module.exports = articleCount;

// var overview = function (orders) {
//
//        var overviewarray = [],
//            total = 0;
//
//        // Group by article
//        orders = _.groupBy(orders, 'article');
//
//        _.forEach(orders, function (item, key) {
//
//            key = parseInt(key);
//            total = 0;
//
//            // If only one article
//            if (item.length === 1) {
//                total = item[0].quantity;
//
//            // Else make sum of all orders
//            } else {
//                total = _.reduce(item, function(sum, item) {
//                    return sum + item.quantity;
//                }, 0);
//            }
//
//            overviewarray.push({
//                article: key,
//                total_orders: total
//            });
//
//        });
//
//        // Order
//        overviewarray = _.sortBy(overviewarray, "total_orders").reverse();
//
//        return overviewarray;
//    };
//
//    module.exports = overview;
