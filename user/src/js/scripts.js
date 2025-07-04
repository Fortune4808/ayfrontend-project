function nextPage(nextId) {
    $('.log-div').hide();
    $('#'+nextId).fadeIn(1000);
  }

  function alertClose(){
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
    const emailAdress = $('#emailAdress').val();

    if (emailAdress==''){
        showAlert('#warning-div', 'EMAIL ERROR', 'All Fields are Required');

    }else{

        const btnText  = $('#submitButton').html();
	    $('#submitButton').html('<i id="spinner" class="bi bi-arrow-repeat"></i> AUTHENTICATING...');
	    document.getElementById('submitButton').disabled = true;

        const formData = new FormData();
        formData.append('emailAddress', emailAdress);

        axios.post(`${endPoint}/user/resetPassword`, formData, { headers })
        .then(response =>{

            const {success, message, emailAddress, firstName, userId} = response.data;

            if (success){
                showAlert('#success-div', 'SUCCESS', message);
                $('#submitButton').html(btnText);
                document.getElementById('submitButton').disabled = false;
                getResetPassForm(emailAddress, firstName, userId);
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

function getResetPassForm(emailAddress, firstName, userId){
    sessionStorage.setItem('userId', userId);
    const action='resetPassword';
    $('.overlay-div').html('<div class="ajax-loader"><br><img src="src/all-images/image-pix/ajax-loader.gif"/></div>').fadeIn(500);
    const formData = new FormData();
    formData.append('action', action);
    formData.append('userId', userId);
    axios.post(accountLocalUrl, formData)
    .then(response => {
        $('.overlay-div').html(response.data);
        $('#passFullname').html(firstName);
        $('#passEmail').html(emailAddress);
    });
}

function finishResetPassword(userId){
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
            formData.append('userId', userId);

            axios.post(`${endPoint}/user/finishResetPassword`, formData, { headers })
            .then(response =>{

                const {success, message} = response.data;

                if (success){
                    showAlert('#success-div', 'SUCCESS', message);
                    $('#submitButton').html(btnText);
                    document.getElementById('submitButton').disabled = false;
                    alertClose();
                    passwordSuccessAlerts();
                    sessionStorage.removeItem('userId', userId);
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
        <img src="all-images/image-pix/success.gif" alt="Success" class="w-36 h-36"/>
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

function getGender() {
    axios.get(`${endPoint}/gender`, { headers })
    .then(response => {
        const { data } = response.data;
        const options = data.map(({ id, genderName }) => 
            `<option value="${id}">${genderName}</option>`
        ).join('');
        $('#genderId').html(options);
    })
    .catch(error => {
        console.error('Error fetching gender:', error);
    });
}

function newUser(){
    const firstName = $('#firstName').val();
    const middleName = $('#middleName').val();
    const lastName = $('#lastName').val();
    const phoneNo = $('#mobileNo').val();
    const emailAddress = $('#emailAddress').val();
    const genderId = $('#genderId').val();

    if (firstName==''){
        showAlert('#warning-div', 'FIRST NAME ERROR', 'All Fields are Required');
    }else if (middleName==''){
        showAlert('#warning-div', 'MIDDLE NAME ERROR', 'All Fields are Required');
    }else if (lastName==''){
        showAlert('#warning-div', 'LAST NAME ERROR', 'All Fields are Required');
    }else if (phoneNo==''){
        showAlert('#warning-div', 'PHONE NUMBER ERROR', 'All Fields are Required');
    }else if (emailAddress==''){
        showAlert('#warning-div', 'EMAIL ADDRESS ERROR', 'All Fields are Required');
    }else if (genderId==''){
        showAlert('#warning-div', 'GENDER ERROR', 'All Fields are Required');
    }else{

        const btnText  = $('#submitBtns').html();
	    $('#submitBtns').html('<i id="spinner" class="bi bi-arrow-repeat"></i> SUBMITTING...');
	    document.getElementById('submitBtns').disabled = true;

        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('middleName', middleName);
        formData.append('lastName', lastName);
        formData.append('mobileNumber', phoneNo);
        formData.append('emailAddress', emailAddress);
        formData.append('genderId', genderId);

        axios.post(`${endPoint}/user/register`, formData, { headers })
        .then(response =>{

            const {success, message} = response.data;

            if (success){
                showAlert('#success-div', 'SUCCESS', message);
                $('#submitBtns').html(btnText);
                document.getElementById('submitBtns').disabled = false;
                $('#firstName, #middleName, #lastName, #mobileNumber, #emailAddress').val('');
            }else{
                showAlert('#warning-div', 'ERROR', message);
                $('#submitBtns').html(btnText);
                document.getElementById('submitBtns').disabled = false;
            }
        })
        .catch(error => {
            if (error.response) {
                showAlert('#warning-div', 'ERROR', error.response.data.message);
                $('#submitBtns').html(btnText);
                document.getElementById('submitBtns').disabled = false;
            }else{
                showAlert('#warning-div', 'ERROR', error);
                $('#submitBtns').html(btnText);
                document.getElementById('submitBtns').disabled = false;
            }
        });
    }
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

        axios.post(`${endPoint}/user/login`, formData, { headers })
        .then(response =>{
            const {success, message, token, data} = response.data;

            if (success){
                showAlert('#success-div', 'SUCCESS', message);
                $('#submitBtn').html(btnText);
                document.getElementById('submitBtn').disabled = false;
                sessionStorage.setItem('accessToken', token);
                sessionStorage.setItem('userData', JSON.stringify(data));
                window.location = userPortalUrl;
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