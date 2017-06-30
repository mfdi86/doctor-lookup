var apiKey = require('./../.env').apiKey;

Doctor = function(){
}

Doctor.prototype.getDoctor = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(result) {
    console.log(result.main.subfile);
    return result.main.subfile;
  }).fail(function(error) {
    $('.show-doctors').text(error.responseJSON.message);
  });
}

exports.doctorModule = Doctor;
