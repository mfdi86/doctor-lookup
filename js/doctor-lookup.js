var apiKey = require('./../.env').apiKey;

//declares Doctors module
Doctors = function(){
}

//receiving medicalIssue and displayDoctors
Doctors.prototype.getDoctor = function(medicalIssue, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(
  function(results) {
    displayDoctors (results);
  }).fail(function(error) {
    console.log("Not working");
  });
}

exports.doctorModule = Doctors;
