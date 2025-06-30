$(document).ready(function() {
  const images = ["./src/all-images/background-pix/bg1.jpg", "./src/all-images/background-pix/bg2.jpg", "./src/all-images/background-pix/bg3.jpg"];
  $.backstretch(images, { duration: 4000, fade: 2000 });
});

function nextPage(nextId) {
  $('.log-div').hide();
  $('#'+nextId).fadeIn(1000);
}

function alertClose(){
  $('.overlay-div').html('').fadeOut(200);
}

$(document).ready(function() {
  function trim(s) {
    return s.replace( /^\s*/, "" ).replace( /\s*$/, "" );
    }
$("#login-info").keydown(function(e){
  if(e.keyCode==13){
    logIn();
  }
});
});

function showAlert(iconType, errorType, message) {
    $(`${iconType}`).html('<div><i class="bi-exclamation-circle"></i></div>' + `${errorType}` + '<br /><span>' + `${message}` + '</span>').fadeIn(500).delay(3000).fadeOut(100);
}

function checkPassword(){
	const password = $('#createPassword').val();
	if (password==''){
    $('#textWarning').hide();
    $('#pswdInfo').fadeIn(500);
	}else{
    $('#pswdInfo').hide();
		if(password.length<8){
			 $('#textWarning').fadeIn(500);
		}else{
			if (password.match(/^(?=[^A-Z]*[A-Z])(?=[^!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]*[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~])(?=\D*\d).{8,}$/)) {
				$('#textWarning').hide();
			  } else {
				 $('#textWarning').fadeIn(500);
			  }
		}
	}
}

function resetPassword(){
    const passEmail = $('#passEmail').val();

    if (passEmail==''){
        showAlert('#warning-div', 'EMAIL ERROR', 'Fill all Fields To Continue');
    }else{
        const btnText  = $('#submitButton').html();
	    $('#submitButton').html('<i id="spinner" class="bi bi-arrow-repeat"></i> AUTHENTICATING...');
	    document.getElementById('submitButton').disabled = true;

        const formData = new FormData();
        formData.append('emailAddress', passEmail);

        axios.post(`${endPoint}/admin/resetPassword`, formData, { headers })
        .then(response =>{

            const {success, message, emailAddress, firstName, staffId} = response.data;

            if (success){
                showAlert('#success-div', 'SUCCESS', message);
                $('#submitButton').html(btnText);
                document.getElementById('submitButton').disabled = false;
                getResetPassForm(emailAddress, firstName, staffId);
            }else{
                showAlert('#warning-div', 'ERROR', message);
                $('#submitButton').html(btnText);
                document.getElementById('submitButton').disabled = false;
            }
        })
        .catch(error => {
            if (error.response) {
                showAlert('#warning-div', 'ERROR', error.response.data.message);
                $('#submitButton').html(btnText);
                document.getElementById('submitButton').disabled = false;
            }else{
                showAlert('#warning-div', 'ERROR', error);
                $('#submitButton').html(btnText);
                document.getElementById('submitButton').disabled = false;
            }
        });
    }
}

function getResetPassForm(emailAddress, firstName, staffId){
    sessionStorage.setItem('staffId', staffId);
    const action='resetPassword';
    $('.overlay-div').html('<div class="ajax-loader"><br><img src="src/all-images/image-pix/ajax-loader.gif"/></div>').fadeIn(500);
    const formData = new FormData();
    formData.append('action', action);
    formData.append('staffId', staffId);
    axios.post(adminLocalUrl, formData)
    .then(response => {
        $('.overlay-div').html(response.data);
        $('#passFullname').html(firstName);
        $('#passEmail').html(emailAddress);
    });
}

function resendOTP(ids, staffId){
    const btnText = $('#' + ids).html();
    $('#' + ids).html('SENDING...');

    const formData = new FormData();
    formData.append('staffId', staffId);

    axios.post(`${endPoint}/admin/resendOTP`, formData, { headers })
    .then(response =>{
       const message = response.data.message;
       showAlert('#success-div', 'SUCCESS', message);
       $('#' + ids).html(btnText);
    })
    .catch(error => {
        if (error.response) {
            showAlert('#warning-div', 'ERROR', error.response.data.message);
            $('#' + ids).html(btnText);
        }else{
            showAlert('#warning-div', 'ERROR', error);
            $('#' + ids).html(btnText);
        }
    });
}

function finishResetPassword(staffId){
    const resetPassOTP = $('#resetPassOTP').val();
    const createPassword = $('#createPassword').val();
    const confirmPassword = $('#confirmPassword').val();

    if (resetPassOTP==''){
        showAlert('#warning-div', 'OTP ERROR', 'Fill all Fields To Continue');
    }else if (createPassword==''){
        showAlert('#warning-div', 'PASSWORD ERROR', 'Fill all Fields To Continue');
    }else if (confirmPassword==''){
        showAlert('#warning-div', 'CONFIRM PASSWORD ERROR', 'Fill all Fields To Continue');
    }else if (createPassword !== confirmPassword){
        showAlert('#warning-div', 'PASSWORD MISMATCH', 'Passwords do not match');
    }else{

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]).{8,}$/;
        if (passwordRegex.test(createPassword)){
            const btnText  = $('#submitButton').html();
            $('#submitButton').html('<i id="spinner" class="bi bi-arrow-repeat"></i> SUBMITTING...');
            document.getElementById('submitButton').disabled = true;

            const formData = new FormData();
            formData.append('otp', resetPassOTP);
            formData.append('password', createPassword);
            formData.append('password_confirmation', confirmPassword);
            formData.append('staffId', staffId);

            axios.post(`${endPoint}/admin/finishResetPassword`, formData, { headers })
            .then(response =>{

                const {success, message} = response.data;

                if (success){
                    showAlert('#success-div', 'SUCCESS', message);
                    $('#submitButton').html(btnText);
                    document.getElementById('submitButton').disabled = false;
                    alertClose();
                    passwordSuccessAlerts();
                    sessionStorage.removeItem('staffId', staffId);
                }else{
                    showAlert('#success-div', 'ERROR', message);
                    $('#submitButton').html(btnText);
                    document.getElementById('submitButton').disabled = false;
                }
            })
            .catch(error => {
                if (error.response) {
                    showAlert('#warning-div', 'ERROR', error.response.data.message);
                    $('#submitButton').html(btnText);
                    document.getElementById('submitButton').disabled = false;
                }else{
                    showAlert('#warning-div', 'ERROR', error);
                    $('#submitButton').html(btnText);
                    document.getElementById('submitButton').disabled = false;
                }
            });
        }else{
            showAlert('#warning-div', 'ERROR', 'Check your password and try again');
        }
    }
}

function passwordSuccessAlerts() {
  async function showFixedAlert() {
    const result = await Swal.fire({
      html: `
      <div class="flex flex-col items-center">
        <img src="src/all-images/image-pix/success.gif" alt="Success" class="w-36 h-36"/>
        <h2 class="text-black font-bold"><strong>Password Successfully Updated</strong></h2>
        <p>You can proceed to login with your new password.</p>
      </div>
    `,
    confirmButtonText: 'Login',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    customClass: {
      confirmButton: 'w-[100px] bg-primary-color font-bold !important'
    }
  });

  if (result.isConfirmed) {
    nextPage('next1');
  }
}
  showFixedAlert();
}

function logIn(){
    const loginEmail = $('#loginEmail').val();
    const loginPass = $('#loginPass').val();

    if (loginEmail==''){
        showAlert('#warning-div', 'EMAIL ERROR', 'Fill all Fields To Continue');
    }else if (loginPass==''){
        showAlert('#warning-div', 'PASSOWRD ERROR', 'Fill all Fields To Continue');
    }else{
        const btnText  = $('#submitBtn').html();
	    $('#submitBtn').html('<i id="spinner" class="bi bi-arrow-repeat"></i> AUTHENTICATING...');
	    document.getElementById('submitBtn').disabled = true;

        const formData = new FormData();
        formData.append('emailAddress', loginEmail);
        formData.append('password', loginPass);

        axios.post(`${endPoint}/admin/login`, formData, { headers })
        .then(response =>{

            const {success, message, token, data} = response.data;

            if (success){
                showAlert('#success-div', 'SUCCESS', message);
                $('#submitBtn').html(btnText);
                document.getElementById('submitBtn').disabled = false;
                sessionStorage.setItem('accessToken', token);
                sessionStorage.setItem('staffData', JSON.stringify(data));
                window.location = portalUrl;
            }else{
                showAlert('#warning-div', 'ERROR', message);
                $('#submitBtn').html(btnText);
                document.getElementById('submitBtn').disabled = false;
            }
        })
        .catch(error => {
            if (error.response) {
                showAlert('#warning-div', 'ERROR', error.response.data.message);
                $('#submitBtn').html(btnText);
                document.getElementById('submitBtn').disabled = false;
            }else{
                showAlert('#warning-div', 'ERROR', error);
                $('#submitBtn').html(btnText);
                document.getElementById('submitBtn').disabled = false;
            }
        });
    }
}




