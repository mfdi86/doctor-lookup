var apiKey = require('./../.env').apiKey;

$(document).ready(function(event){
  $('#condition-btn').click(function(){
    var condition = $('#condition').val();
    $('#condition').val("");
    $('.show-doctors').text("Your symptoms: " + condition + ".");
  });
});
