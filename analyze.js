var _= require("lodash");

var freelancers =  [
                     { name: "mike",  income: 2563 },
                     { name: "kim",   income: 1587 },
                     { name: "liz",   income: 3541 },
                     { name: "tom",   income: 2475 },
                     { name: "bello", income: 987  },
                     { name: "frank", income: 2975 }
                   ];

var freelancerStats = function(freelancers) {
  var totalIncome = _.reduce(freelancers, function(sum, freelancer) {
    return sum + freelancer.income;
  }, 0);

  var averageIncome = totalIncome / freelancers.length;

  var sorted = _.sortBy(freelancers, 'income');

  var underperform = _.filter(sorted, function(freelancer) {
    return freelancer.income <= averageIncome;
  });

  var overperform = _.filter(sorted, function(freelancer) {
    return freelancer.income > averageIncome;
  });

  return {
    average: averageIncome,
    underperform: underperform,
    overperform: overperform
  };
};

module.exports = freelancerStats;
