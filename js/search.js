var apiKey = require('./../.env').apiKey;
function Issue()
{
}

Issue.prototype.getDoctors = function(userInput, callback) {
  var practicesNames= [];

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+userInput+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=8&user_key='+apiKey)

  .then(function(result){
    console.log(result);
    // console.log(JSON.stringify(result));
    for(var i=0; i< result.data.length; i++){
      practicesNames.push(result.data[i].practices[0].name);
    }
    callback(practicesNames);
  })
  .fail(function(error){
    console.log("fail");
  });
};

exports.issueModule = Issue;
