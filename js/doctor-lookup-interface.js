//imports doctorModule
var Doctors = require('./../js/doctor-lookup.js').doctorModule;

$(document).ready(function() {
  var doctors = new Doctors();

  $('#condition-form').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#condition').val();
    $('#condition').val("");
    //on new instance of Doctors run function getDoctor function and pass it 
    doctors.getDoctor(medicalIssue, displayDoctors);
  });
});

var displayDoctors = function(doctors) {
  doctors.data.forEach(function(doc)  {
    console.log(doc);
    $('#doc-list').append(
    '<li>' + doc.practices[0].name + '</li>'
    '<li>' + doc.practices[0].phones[0].number + '</li>' +
    '<li>' + doc.practices[0].visit_address.zip + '</li>' +
    '<li>' + doc.practices[0].visit_address.state + '</li>' +
    '<li>' + doc.practices[0].visit_address.city + '</li>' +
    '<li>' + doc.practices[0].visit_address.street + '</li>' +
    '<li>' + doc.specialties[0].description + '</li>'
    );
  });
};
