var Issue = require('./../js/search.js').issueModule;

var displayDoctors = function(practicesNames){
  console.log("practicesNames:"+ practicesNames);
  $('#practicesNames').empty();
  for (var i = 0; i < practicesNames.length; i++) {
    $('#practicesNames').append(practicesNames[i]);
  }
};

$(document).ready(function() {
  $('#intake-form').submit(function(event) {
    event.preventDefault();
    var userInput= $('#issue').val();
    var newIssue = new Issue();
    newIssue.getDoctors(userInput, displayDoctors);
  });
});
