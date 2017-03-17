//require object-backend:
var Issue = require('./../js/search.js').issueModule;

$(document).ready(function() {
  $('#intake-form').submit(function(event) {
    event.preventDefault();
    var userInput= $('#issue').val();
    var newIssue = new Issue(userInput);
    //Call prototype method on instantiated object:
    newIssue.getDoctors();
    $('#result').show();
  });
});
