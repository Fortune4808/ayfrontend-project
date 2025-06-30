function _next_page(next_id) {
    $('.log-div').hide();
    $('#'+next_id).fadeIn(1000);
  }

  function alert_close(){
    $('.overlay-div').html('').fadeOut(200);
  }

  function validateTextInput(input) {
    input = input.trim();
    return input === '' || /^[a-zA-Z\s]+$/.test(input);
    }
    
    function validatePhoneNumber(input) {
    input = input.trim();
    return /^[\d\s()+-]+$/.test(input);
    }


document.addEventListener('DOMContentLoaded', () => {
  const listItems = document.querySelectorAll('nav ul li');
  
  listItems.forEach(item => {
      item.addEventListener('click', () => {
          // Remove active class from all list items
          listItems.forEach(li => li.classList.remove('bg-[#D5DBDB]'));
          
          // Add active class to the clicked item
          item.classList.add('bg-[#D5DBDB]');
      });
  });
});

function _get_gender() {
  axios.post(endpoint + '/public/fetch-gender-api', null, { headers: apikey })
  .then(response => {
      var success = response.data.success;
      var fetch = response.data.data;

      var text = '';
      if (success == true) {
        for (var i = 0; i < fetch.length; i++) {
            var gender_id = fetch[i].gender_id;
            var gender_name = fetch[i].gender_name;
            text += '<option value="' + gender_id + '">' + gender_name + '</option>';
        }
        $('#gender_id').html('<option value="">Select Gender</option>' + text);
    }
  });
}

function _get_level() {
  axios.post(endpoint + '/public/fetch-level-api', null, { headers: apikey })
  .then(response => {
      var success = response.data.success;
      var fetch = response.data.data;

      var text = '';
      if (success == true) {
        for (var i = 0; i < fetch.length; i++) {
            var level_id = fetch[i].level_id;
            var level_name = fetch[i].level_name;
            text += '<option value="' + level_id + '">' + level_name + '</option>';
        }
        $('#level_id').html('<option value="">Select Level</option>' + text);
    }
  });
}

function _get_faculty() {
  axios.post(endpoint + '/public/fetch-faculty-api', null, { headers: apikey })
  .then(response => {
      var success = response.data.success;
      var fetch = response.data.data;

      var text = '';
      if (success == true) {
        for (var i = 0; i < fetch.length; i++) {
            var faculty_id = fetch[i].faculty_id;
            var faculty_name = fetch[i].faculty_name;
            text += '<option value="' + faculty_id + '">' + faculty_name + '</option>';
        }
        $('#faculty_id').html('<option value="">Select School</option>' + text);
    }
  });
}

function _get_department(faculty_id) {
  if (!faculty_id) {
      return;
  }
formData='faculty_id=' + faculty_id

  axios.post(endpoint + '/public/fetch-department-api', formData, { headers: apikey })
  .then(response => {
      var access_check = response.data.check;
      var success = response.data.success;
      var fetch = response.data.data;

      var text = '';
      if (access_check == 0) {
          _logout_(); 
      } else {
          if (success == true) {
              for (var i = 0; i < fetch.length; i++) {
                  var department_id = fetch[i].department_id;
                  var department_name = fetch[i].department_name;
                  text += '<option value="' + department_id + '">' + department_name + '</option>';
              }
              $('#department_id').html('<option value="">All Department</option>' + text);
          }
      }
  });
}

function _get_programme() {
  axios.post(endpoint + '/public/fetch-programme-api', null, { headers: apikey })
  .then(response => {
      var success = response.data.success;
      var fetch = response.data.data;

      var text = '';
      if (success == true) {
        for (var i = 0; i < fetch.length; i++) {
            var programme_id = fetch[i].programme_id;
            var programme_name = fetch[i].programme_name;
            text += '<option value="' + programme_id + '">' + programme_name + '</option>';
        }
        $('#programme_id').html('<option value="">Select Programme</option>' + text);
    }
  });
}

function showError(errorType, message) {
  $('#warning-div').html('<div><i class="bi-exclamation-circle"></i></div>' + errorType + '<br /><span>' + message + '</span>').fadeIn(500).delay(3000).fadeOut(100);
}

function _add_new_student(){
  var matric_number = $('#matric_no').val();
  var firstname = $('#firstname').val();
  var middle_name = $('#middle_name').val();
  var last_name = $('#last_name').val();
  var email = $('#email_address').val();
  var mobileno = $('#mobileno').val();
  var p_mobileno = $('#p_mobileno').val();
  var dob = $('#dob').val();	
  var gender_id = $('#gender_id').val();	
  var faculty_id = $('#faculty_id').val();	
  var department_id = $('#department_id').val();	
  var programme_id = $('#programme_id').val();	
  var level_id = $('#level_id').val();	
  var session_id = $('#session_id').val();

  if (matric_number == '') {
    showError('MATRIC ERROR!', 'Fill all Fields To Continue');
  } else if (firstname == '') {
    showError('FIRSTNAME ERROR!', 'Fill all Fields To Continue');
  } else if (middle_name == '') {
    showError('MIDDLE NAME ERROR!', 'Fill all Fields To Continue');
  } else if (last_name == '') {
    showError('LAST NAME ERROR!', 'Fill all Fields To Continue');
  } else if (email == '') {
    showError('EMAIL ADDRESS ERROR!', 'Fill all Fields To Continue');
  } else if (mobileno == '') {
    showError('MOBILE NUMBER ERROR!', 'Fill all Fields To Continue');
  } else if (p_mobileno === '') {
    showError('PARENT NUMBER ERROR!', 'Fill all Fields To Continue');
  } else if (dob === '') {
    showError('DATE OF BIRTH ERROR!', 'Fill all Fields To Continue');
  } else if (gender_id === '') {
    showError('GENDER ERROR!', 'Fill all Fields To Continue');
  } else if (faculty_id === '') {
    showError('FACULTY ERROR!', 'Fill all Fields To Continue');
  } else if (department_id === '') {
    showError('DEPARTMENT ERROR!', 'Fill all Fields To Continue');
  } else if (programme_id === '') {
    showError('PROGRAMME ERROR!', 'Fill all Fields To Continue');
  } else if (level_id === '') {
    showError('LEVEL ERROR!', 'Fill all Fields To Continue');
  } else if (session_id === '') {
    showError('SESSION ERROR!', 'Fill all Fields To Continue');
  } else if (!validateTextInput(firstname + middle_name + last_name)) {
    showError('FULLNAME ERROR!', 'Digit is not allowed in fullname input');
  } else if (!validatePhoneNumber(mobileno)) {
    showError('PHONE ERROR!', 'Please ensure you enter a valid phone number');
  
	}else{
  
	  var btn_text  = $('#submit_button').html();
	  $('#submit_button').html('<i id="spinner" class="bi bi-arrow-repeat"></i> SUBMITTING...');
	  document.getElementById('submit_button').disabled = true;
  
	  var formData = 'matric_no=' + matric_number + '&firstname=' + firstname + '&middlename=' + middle_name + '&lastname=' + last_name + '&email_address=' + email + '&mobile_no=' + mobileno + '&p_mobile_no=' + p_mobileno + '&dob=' + dob + '&gender_id=' + gender_id + '&faculty_id=' + faculty_id + '&department_id=' + department_id + '&programme_id=' + programme_id + '&level_id=' + level_id + '&session_id=' + session_id;

	  axios.post(endpoint + '/student/new-student-reg-api', formData, { headers: apikey })
	  .then(response => {
		  var success = response.data.success;
		  var message = response.data.message;

		
			if (success) {
				$('#success-div').html('<div><i class="bi-check-all"></i></div>SUCCESS!' + ' ' + message).fadeIn(500).delay(5000).fadeOut(100);
				$('#submit_button').html(btn_text);
				document.getElementById('submit_button').disabled=false;
        $('#matric_no, #firstname, #middle_name, #last_name, #email_address, #mobileno, #p_mobileno, #dob, #gender_id, #faculty_id, #department_id, #programme_id, #level_id, #session_id').val('');
        // _next_page('next_1');
			}else{
				$('#warning-div').html('<div><i class="bi-check-all"></i></div>ERROR!' + ' ' + message).fadeIn(500).delay(5000).fadeOut(100);
          		$('#submit_button').html(btn_text);
          		document.getElementById('submit_button').disabled=false;
			}
		  
	  })
	  .catch(error => {
		$('#warning-div').html('<div><i class="bi-check-all"></i></div>ERROR!' + ' ' + error).fadeIn(500).delay(5000).fadeOut(100);
		$('#submit_button').html(btn_text);
		document.getElementById('submit_button').disabled = false;
	  });
	  
	}
  }

  function _log_in(){
    var matric_no = $('#matric').val();
    var password = $('#login_pass').val();
  
    if (matric_no==''){
      $('#warning-div').html('<div><i class="bi-exclamation-circle"></i></div> MATRIC ERROR!<br /><span>Fill all Fields To Continue</span>').fadeIn(500).delay(3000).fadeOut(100);
    }else if (password==''){
      $('#warning-div').html('<div><i class="bi-exclamation-circle"></i></div> PASSWORD ERROR!<br /><span>Fill all Fields To Continue</span>').fadeIn(500).delay(3000).fadeOut(100);
    }else{
  
      var btn_text = $('#submit_btn').html();
      $('#submit_btn').html('<i id="spinner" class="bi bi-arrow-repeat"></i> AUTHENTICATING...');
      document.getElementById('submit_btn').disabled = true;
  
      var formData ='matric_no=' + matric_no + '&password=' + password;

      axios.post(endpoint+'/student/login', formData, { headers: apikey })
      .then(response => {
          var success = response.data.success;
          var message = response.data.message;
          var access_key = response.data.access_key;

          if (success){
              $('#success-div').html('<div><i class="bi-check-all"></i></div>SUCCESS!' + ' ' + message + "").fadeIn(500).delay(5000).fadeOut(100);
              $('#submit_btn').html(btn_text);
              document.getElementById('submit_btn').disabled=false;
              sessionStorage.setItem('access_key', access_key);
             checkOutstandingFee(access_key);
          }else{
              $('#warning-div').html('<div><i class="bi-check-all"></i></div>ERROR!' + ' ' + message + "").fadeIn(500).delay(5000).fadeOut(100);
              $('#submit_btn').html(btn_text);
              document.getElementById('submit_btn').disabled=false;
          }
          })
          .catch(error => {
              $('#warning-div').html('<div><i class="bi-check-all"></i></div>ERROR!' + ' ' + error + "").fadeIn(500).delay(5000).fadeOut(100);
              $('#submit_btn').html(btn_text);
              document.getElementById('submit_btn').disabled = false;
          });
      
    }
   }

   function checkOutstandingFee(access_key){
        axios.post(endpoint+'/student/oustanding-fee?access_key='+access_key, null, { headers: apikey })
        .then(response => {
          var success = response.data.success;

          if (success){
            window.location.href=paymentPage;
             
          }else{
            window.location.href=student_portal_url;
          }
          })
          .catch(error => {
              $('#warning-div').html('<div><i class="bi-check-all"></i></div>ERROR!' + ' ' + error + "").fadeIn(500).delay(5000).fadeOut(100);
              $('#submit_btn').html(btn_text);
              document.getElementById('submit_btn').disabled = false;
        });
   }





