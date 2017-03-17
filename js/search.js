var apiKey = require('./../.env').apiKey;
// Create object and his property:
function Issue(userInput)
{
  this.userInput= userInput;
}

//Create prototype method to manipulate API data:
Issue.prototype.getDoctors = function() {
  var outputs=[];

  var practicesNames= [];
  var phones=[];
  var images=[];
  var bios=[];
//call API data with get method:
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+this.userInput+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=8&user_key='+apiKey)
//then method to push organized,selected data into "outputs" array:
  .then(function(result){
    console.log(result);
    // console.log(JSON.stringify(result));
    for(var i=0; i< result.data.length; i++){
      practicesNames.push(result.data[i].practices[0].name);
      phones.push(result.data[i].practices[0].phones[0].number);
      images.push(result.data[i].profile.image_url);
      bios.push(result.data[i].profile.bio);
      var output= {name: practicesNames[i], phone: phones[i], image:images[i], bio:bios[i]};
      outputs.push(output);
    }
    displayDoctors(outputs);
  })

  .fail(function(error){
    console.log("fail");
  });
};

//Create method to display data:
var displayDoctors = function(outputs){
  for (var i = 0; i < outputs.length; i++) {
    $('#result').append('<h3> '+ outputs[i].name+ ' </h3>'+ '<p> Phone Number: '+outputs[i].phone+' </p>'+'<p>'+ outputs[i].bio+'</p>'+'<img src="'+outputs[i].image+'"/>');
  }
};

//export object:
exports.issueModule = Issue;
