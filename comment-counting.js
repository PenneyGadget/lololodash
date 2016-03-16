var _= require("lodash");

var comments =  [
                  { username: "tim", comment: "you are doing a great job!" },
                  { username: "tim", comment: "when you have new workshoppers?" },
                  { username: "cat_lover", comment: "wtf? where are all the cats gone?" },
                  { username: "max", comment: "where have you been on friday? we missed you!" },
                  { username: "max", comment: "You don't answer anymore - why?" },
                  { username: "cat_lover", comment: "MORE cats!!!" },
                  { username: "max", comment: "i really love your site" }
                ];

var commentCount = function(comments) {
  var counted = [];

  var grouped =  _.groupBy(comments, 'username');

  _.forEach(grouped, function(comments, username) {
    counted.push({ username: username,
                   comment_count: _.size(comments) });
  });

  var sorted = _.sortBy(counted, function(user) {
    return -user.comment_count;
  });

  return sorted;
};

module.exports = commentCount;

/*
 Alternative solution with use of 'chain':

 var commentcount = function(comments) {

     return _.chain(comments)
     .groupBy("username")
     .map(function(item, name) {
         return {username: name, comment_count: _.size(item)};
     })
     .sortBy(function(counted) {
         return -counted["comment_count"];
     });
 };
 */
