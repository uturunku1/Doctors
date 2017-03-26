//require object-backend:
var Issue = require('./../js/search.js').issueModule;

//Create method to display data:
var displayDoctors = function(outputs){
  for (var i = 0; i < outputs.length; i++) {
    $('#result').append('<h3> '+ outputs[i].name+ ' </h3>'+ '<p> Phone Number: '+outputs[i].phone+' </p>'+'<p>'+ outputs[i].bio+'</p>'+'<img src="'+outputs[i].image+'"/>');
  }
};



$(document).ready(function() {
  $('#intake-form').submit(function(event) {
    event.preventDefault();
    var userInput= $('#issue').val();
    var newIssue = new Issue(userInput);
    //Call prototype method on instantiated object:
    newIssue.getDoctors(displayDoctors);
    $('#result').show();
  });
});
