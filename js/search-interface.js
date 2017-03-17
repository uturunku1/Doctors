var Issue = require('./../js/search.js').issueModule;

var displayDoctors = function(outputs){
  // $('#practicesNames').empty();
  // $('#descriptions').empty();
  for (var i = 0; i < outputs.length; i++) {
    $('#result').append('<h3> '+ outputs[i].name+ ' </h3>'+ '<p> '+outputs[i].description+' </p>'+'<p>'+ outputs[i].bio+'</p>'+'<img src="'+outputs[i].image+'"/>');
  }
};

$(document).ready(function() {
  $('#intake-form').submit(function(event) {
    event.preventDefault();
    var userInput= $('#issue').val();
    var newIssue = new Issue();
    newIssue.getDoctors(userInput, displayDoctors);
    $('#result').show();
  });
});
