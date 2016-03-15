var _= require("lodash");

var towns = {
              Hamburg:    { population: 1.698 },
              Strasbourg: { population: 0.272 },
              Rome:       { population: 2.753 },
              Dublin:     { population: 0.528 }
            };

module.exports = function(towns) {
  return _.forEach(towns, function(town) {
    if (town.population > 1.0) {
      town.size = 'big';
    } else if (town.population < 0.5) {
      town.size = 'small';
    } else {
      town.size = 'med';
    }
  });
};
