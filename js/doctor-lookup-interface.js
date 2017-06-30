var Doctor = require('./../js/doctor-lookup.js').doctorModule;

var displayDoctors = function(doctors) {
  $('.show-doctors').text("Here are some doctors in your area: " doctors);
}

$(document).ready(function(){
    var showDoctors = new Doctor();
$('#condition-btn').click(function(){
    var medicalIssue = $('#condition').val();
    $('#condition').val("");
    showDoctors.getDoctor(medicalIssue);

  //   $('.show-doctors').text("Your symptoms: " + condition + ".");
  //   $.get()
  //   .then(function(result) {
  //     console.log(result);
  //   })
  //  .fail(function(error){
  //     console.log("fail");
    }); //fail function
  }); //click function
}); //document ready function
