var Doctor = require('./../js/doctor-lookup.js').doctorModule;
var displayDoctors = function(doctors) {
  doctors.forEach(function(doctors)  {
    $('#doc-list').append('<li>' + doctors + '</li>');
  });
}

$(document).ready(function() {
  var doctors = new Doctor();
  console.log($('#condition-btn'));
  $('#condition-btn').submit( () => {
      var medicalIssue = $('#condition').val();
      $('#condition').val("");
      doctors.getDoctor(displayDoctors);
    });
});
