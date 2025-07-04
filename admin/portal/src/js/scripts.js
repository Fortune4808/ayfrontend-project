$(document).ready(function() {
  const images = ["./src/all-images/background-pix/cover-pix.jpg"];
  $.backstretch(images, { duration: 4000, fade: 2000 });
});

function nextPage(nextId) {
  $('.log-div').hide();
  $('#'+nextId).fadeIn(1000);
}


function alertClose(){
  $('.overlay-div').html('').fadeOut(200);
}

function expandLink(ids){
  $('#'+ids+'-li').toggle('slow');
}

function setActive(clickedItem) {
  const items = document.querySelectorAll('.active');
  items.forEach(item => {
      item.style.backgroundColor = '#fff'; 
  });

  clickedItem.style.backgroundColor = '#d4d4d4';
}

function capitalizeWords(str) {
  return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

function validateTextInput(input) {
	input = input.trim();
	return input === '' || /^[a-zA-Z\s]+$/.test(input);
  }
  
  function validatePhoneNumber(input) {
	input = input.trim();
	return /^[\d\s()+-]+$/.test(input);
  }  

  function formatNumberWithComma(number) {
    let num = parseFloat(number);
    return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}


function getForm(page) {
    $('.overlay-div').html('<div class="ajax-loader"><br><img src="src/all-images/image-pix/ajax-loader.gif"/></div>').fadeIn(500);
    const action='getForm';
    const formData ='action='+ action+'&page='+ page;
    axios.post(adminPortalLocalUrl, formData)
        .then(response => {
        $('.overlay-div').html(response.data);
    });
}

function getFormWithId(page, ids) {
    $('.overlay-div').html('<div class="ajax-loader"><br><img src="src/all-images/image-pix/ajax-loader.gif"/></div>').fadeIn(500);
    const action='getFormWithId';
    const formData ='action='+ action+'&page='+ page + '&ids=' + ids;
    axios.post(adminPortalLocalUrl, formData)
        .then(response => {
        $('.overlay-div').html(response.data);
    });
}

function getPage(page) {
    $('#main-dashboard').html('<div class="ajax-loader"><br><img src="src/all-images/image-pix/ajax-loader.gif"/></div>').fadeIn(500);
    const action='getPage';
    const formData ='action='+ action+'&page='+ page;
    axios.post(adminPortalLocalUrl, formData)
    .then(response => {
        $('#main-dashboard').html(response.data);
    });
}

function noRecordFound(message) {
    return `
        <div class="bg-[#FAF3F0] text-[#3a4669] border-[#F2BDA2] border-[1px] w-full mx-auto mt-1 flex gap-1 p-3 pl-4 text-sm">
            <i class="bi bi-bell"></i><p>${message}</p>
        </div>
    `;
}

function showAlert(iconType, errorType, message) {
    $(`${iconType}`).html('<div><i class="bi-exclamation-circle"></i></div>' + `${errorType}` + '<br /><span>' + `${message}` + '</span>').fadeIn(500).delay(3000).fadeOut(100);
}

function getStaffLogin(){
    const fullName = `${staffData.firstName} ${staffData.middleName} ${staffData.lastName}`;
    const passportUrl = staffData.passportUrl;
    const roleName = staffData.role.roleName;

    $('#loginStaffFullname').html(fullName);
    $('#loginDashboardRole').html(capitalizeWords(roleName));
    $("#pictureBox2, #pictureBox1, #profilePix").attr('src', passportUrl);
    $('#loginStaffProfiles').html(capitalizeWords(fullName));
    $('#loginStatusName').html(staffData.status.statusName);

    $('#surname').val(staffData.firstName);
    $('#othernames').val(`${staffData.middleName} ${staffData.lastName}`);
    $('#surname').val(staffData.firstName);
    $('#emailAddress').val(staffData.emailAddress);
    $('#phoneNo').val(staffData.mobileNumber);
    $('#staffId').val(staffData.staffId);
    $('#rDate').val(staffData.createdAt);
    $('#status').val(staffData.status.statusName);
    $('#role').val(staffData.role.roleName);

    $("#genderId").append('<option value="' + staffData.gender.genderId + '" selected="selected">' + staffData.gender.genderName +"</option>");
}

function allStaff(){
    const container = $('#fetchAllStaff');
    container.html(`<div class="ajax-loader"><br><img src="src/all-images/image-pix/ajax-loader.gif"/></div>`).fadeIn(500);

    axios.get(`${endPoint}/admin/list`, { headers })
    .then(response => {
        const {success, message, data: fetch, pagination } = response.data;  
        if (success) {
            if (fetch.length > 0) {
                const tableRows = fetch.map((item, index) => {
                    const staffId = item.staffId;
                    const fullName = `${item.firstName.toUpperCase()} ${item.middleName.toUpperCase()} ${item.lastName}`;
                    const emailAddress = item.emailAddress;
                    const mobileNumber = item.mobileNumber;
                    const statusName = item.status.statusName;
                    const roleName = item.role.roleName;
                    const passportUrl = item.passportUrl;

                    return `
                        <tr>
                            <td>${index + 1}</td>
                            <td><div class="w-[25px] h-[25px] rounded-full"><img class="w-[100%] h-[100%] object-cover rounded-full" src="${passportUrl}" alt=""></div></td>
                            <td>${staffId}</td>
                            <td>${fullName}</td>
                            <td>${emailAddress}</td>
                            <td>${mobileNumber}</td>
                            <td>${roleName}</td>
                            <td>${statusName}</td>
                            <td><i onclick="getFormWithId('staffProfileModule','${staffId}')" class="bi bi-pencil-square text-[15px] text-white p-[8px] bg-primary-color cursor-pointer hover:bg-[#444444]" title="VIEW PROFILE"></i></td>
                        </tr>
                    `;
                }).join('');

                const table = `
                    <table>
                        <thead><tr><th>SN</th><th>PASSPORT</th><th>STAFF ID</th><th>FULLNAME</th><th>EMAIL ADDRESS</th><th>MOBILE NUMBER</th><th>ROLE</th><th>STATUS</th><th>ACTION</th></tr></thead>
                        <tbody class="bg-white">${tableRows}</tbody>
                    </table>
                    <div class="my-[10px] flex justify-between">
                        <div class="text-[#3a4669]">
                            Showing ${pagination.from} to ${pagination.to} of ${pagination.total} entries
                        </div>

                        <div class="flex gap-1 mb-4">
                            <button class="text-sm py-[8px] px-[15px]" ${pagination.prevPageUrl ? `onclick="(${pagination.prevPageUrl})"` : 'disabled'}>PREVIOUS</button>
                            <button class="text-sm py-[8px] px-[15px]" ${pagination.nextPageUrl ? `onclick="(${pagination.nextPageUrl})"` : 'disabled'}>NEXT</button>
                        </div>
                    </div>
                `;
                container.html(table);
            }
        } else {
            container.html(`
                <table>
                    <thead><tr><th>SN</th><th>PASSPORT</th><th>STAFF ID</th><th>FULLNAME</th><th>EMAIL ADDRESS</th><th>MOBILE NUMBER</th><th>ROLE</th><th>STATUS</th><th>ACTION</th></tr></thead>
                    <tbody class="bg-white"></tbody>
                </table>
                ${noRecordFound(message)}
            `);
        }
    })
    .catch(error => {
        console.error('Error fetching staff:', error);
        container.html('<p>There was an error fetching the staff. Please try again later.</p>');
    });

}

function staffProfile(staffId){
    axios.get(`${endPoint}/admin/list/${staffId}`, { headers })
    .then(response => {
        const {data: staffData } = response.data;

        const fullName = `${staffData.firstName} ${staffData.middleName} ${staffData.lastName}`;
        const passportUrl = staffData.passportUrl;
        const roleName = staffData.role.roleName;

        $('#staffLoginStaffFullname').html(fullName);
        $('#staffLoginDashboardRole').html(capitalizeWords(roleName));
        $("#staffProfilePix").attr('src', passportUrl);
        $('#staffLoginProfiles').html(capitalizeWords(fullName));
        $('#staffLoginStatusName').html(staffData.status.statusName);

        $('#surname').val(staffData.firstName);
        $('#othernames').val(`${staffData.middleName} ${staffData.lastName}`);
        $('#surname').val(staffData.firstName);
        $('#emailAddress').val(staffData.emailAddress);
        $('#phoneNo').val(staffData.mobileNumber);
        $('#staffId').val(staffData.staffId);
        $('#rDate').val(staffData.createdAt);
        $('#status').val(staffData.status.statusName);
        $('#role').val(staffData.role.roleName);

        $("#genderId").append('<option value="' + staffData.gender.genderId + '" selected="selected">' + staffData.gender.genderName +"</option>");
    })
    .catch(error => {
        console.error('Error fetching staff:', error);
        container.html('<p>There was an error fetching the staff. Please try again later.</p>');
    });
}

function getStatus() {
    axios.get(`${endPoint}/status`, { headers })
    .then(response => {
        const { data } = response.data;
        const options = data.map(({ id, statusName }) => 
            `<option value="${id}">${statusName}</option>`
        ).join('');
        $('#statusId').html(options);
    })
    .catch(error => {
        console.error('Error fetching status:', error);
    });
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

function getRole() {
    axios.get(`${endPoint}/admin/role`, { headers })
    .then(response => {
        const { data } = response.data;
        const options = data.map(({ id, name }) => 
            `<option value="${id}">${name}</option>`
        ).join('');
        $('#roleId').html(options);
    })
    .catch(error => {
        console.error('Error fetching role:', error);
    });
}

function newStaff(){
    const firstName = $('#firstName').val();
    const middleName = $('#middleName').val();
    const lastName = $('#lastName').val();
    const phoneNo = $('#phoneNo').val();
    const emailAddress = $('#emailAddress').val();
    const genderId = $('#genderId').val();
    const roleId = $('#roleId').val();
    const statusId = $('#statusId').val();

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
    }else if (roleId==''){
        showAlert('#warning-div', 'ROLE ERROR', 'All Fields are Required');
    }else if (statusId==''){
        showAlert('#warning-div', 'STATUS ERROR', 'All Fields are Required');
    }else{

        const btnText  = $('#submitBtn').html();
	    $('#submitBtn').html('<i id="spinner" class="bi bi-arrow-repeat"></i> SUBMITTING...');
	    document.getElementById('submitBtn').disabled = true;

        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('middleName', middleName);
        formData.append('lastName', lastName);
        formData.append('mobileNumber', phoneNo);
        formData.append('emailAddress', emailAddress);
        formData.append('genderId', genderId);
        formData.append('roleId', roleId);
        formData.append('statusId', statusId);

        axios.post(`${endPoint}/admin`, formData, { headers })
        .then(response =>{

            const {success, message} = response.data;

            if (success){
                showAlert('#success-div', 'SUCCESS', message);
                $('#submitBtn').html(btnText);
                document.getElementById('submitBtn').disabled = false;
                allStaff(); alertClose();
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

function allCustomers(){
    const container = $('#fetchAllCustomers');
    container.html(`<div class="ajax-loader"><br><img src="src/all-images/image-pix/ajax-loader.gif"/></div>`).fadeIn(500);

    axios.get(`${endPoint}/admin/user`, { headers })
    .then(response => {
        const {success, message, data: fetch, pagination } = response.data;  
        if (success) {
            if (fetch.length > 0) {
                const tableRows = fetch.map((item, index) => {
                    const userId = item.userId;
                    const fullName = `${item.firstName.toUpperCase()} ${item.middleName.toUpperCase()} ${item.lastName}`;
                    const emailAddress = item.emailAddress;
                    const mobileNumber = item.mobileNumber;
                    const statusName = item.status.statusName;
                    const passportUrl = item.passportUrl;

                    return `
                        <tr>
                            <td>${index + 1}</td>
                            <td><div class="w-[25px] h-[25px] rounded-full"><img class="w-[100%] h-[100%] object-cover rounded-full" src="${passportUrl}" alt=""></div></td>
                            <td>${userId}</td>
                            <td>${fullName}</td>
                            <td>${emailAddress}</td>
                            <td>${mobileNumber}</td>
                            <td>${statusName}</td>
                            <td><i onclick="getFormWithId('studentProfileModule','${userId}')" class="bi bi-pencil-square text-[15px] text-white p-[8px] bg-primary-color cursor-pointer hover:bg-[#444444]" title="VIEW PROFILE"></i></td>
                        </tr>
                    `;
                }).join('');

                const table = `
                    <table>
                        <thead><tr><th>SN</th><th>PASSPORT</th><th>CUSTOMER ID</th><th>FULLNAME</th><th>EMAIL ADDRESS</th><th>MOBILE NUMBER</th><th>STATUS</th><th>ACTION</th></tr></thead>
                        <tbody class="bg-white">${tableRows}</tbody>
                    </table>
                    <div class="my-[10px] flex justify-between">
                        <div class="text-[#3a4669]">
                            Showing ${pagination.from} to ${pagination.to} of ${pagination.total} entries
                        </div>

                        <div class="flex gap-1 mb-4">
                            <button class="text-sm py-[8px] px-[15px]" ${pagination.prevPageUrl ? `onclick="(${pagination.prevPageUrl})"` : 'disabled'}>PREVIOUS</button>
                            <button class="text-sm py-[8px] px-[15px]" ${pagination.nextPageUrl ? `onclick="(${pagination.nextPageUrl})"` : 'disabled'}>NEXT</button>
                        </div>
                    </div>
                `;
                container.html(table);
            }
        } else {
            container.html(`
                <table>
                    <thead><tr><th>SN</th><th>PASSPORT</th><th>CUSTOMER ID</th><th>FULLNAME</th><th>EMAIL ADDRESS</th><th>MOBILE NUMBER</th><th>STATUS</th><th>ACTION</th></tr></thead>
                    <tbody class="bg-white"></tbody>
                </table>
                ${noRecordFound(message)}
            `);
        }
    })
    .catch(error => {
        console.error('Error fetching customers:', error);
        container.html('<p>There was an error fetching the customers. Please try again later.</p>');
    });

}

function getCustomerProfile(customerId){
    axios.get(`${endPoint}/admin/user/${customerId}`, { headers })
    .then(response => {
        const {data: customerData } = response.data;

        const fullName = `${customerData.firstName} ${customerData.middleName} ${customerData.lastName}`;
        const passportUrl = customerData.passportUrl;

        $('#customerFullname').html(fullName);
        $("#customerPix").attr('src', passportUrl);
        $('#staffLoginProfiles').html(capitalizeWords(fullName));

        $('#surname').val(customerData.firstName);
        $('#othernames').val(`${customerData.middleName} ${customerData.lastName}`);
        $('#surname').val(customerData.firstName);
        $('#emailAddress').val(customerData.emailAddress);
        $('#phoneNo').val(customerData.mobileNumber);
        $('#customerId').val(customerData.userId);
        $('#rDate').val(customerData.createdAt);
        $('#status').val(customerData.status.statusName);

        $("#genderId").append('<option value="' + customerData.gender.genderId + '" selected="selected">' + customerData.gender.genderName +"</option>");
    })
    .catch(error => {
        console.error('Error fetching customer:', error);
        container.html('<p>There was an error fetching the customer. Please try again later.</p>');
    });
}

function deleteLocation(locationId){
    axios.delete(`${endPoint}/admin/location/${locationId}`, { headers })
    .then(response => {
        const {success, message } = response.data;
        if (success){
            showAlert('#success-div', 'SUCCESS', message);
            allLocation();
        }
    })
    .catch(error => {
        console.error('Error deleting location:', error);
        container.html('<p>There was an error deleting the location. Please try again later.</p>');
    });
}

function allLocation(){
    const container = $('#fetchAllLocation');
    container.html(`<div class="ajax-loader"><br><img src="src/all-images/image-pix/ajax-loader.gif"/></div>`).fadeIn(500);

    axios.get(`${endPoint}/admin/location`, { headers })
    .then(response => {
        const {success, message, data: fetch, pagination } = response.data;  
        if (success) {
            if (fetch.length > 0) {
                const tableRows = fetch.map((item, index) => {
                    const id = item.id;
                    const locationName = `${item.locationName.toUpperCase()}`;
                    const createdBy = item.createdBy;
                    const createdAt = item.created_at;

                    return `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${locationName}</td>
                            <td>${createdBy}</td>
                            <td>${createdAt}</td>
                            <td>
                                <i onclick="getFormWithId('locationProfile','${id}')" class="bi bi-pencil-square text-[15px] text-white p-[8px] bg-primary-color cursor-pointer hover:bg-[#444444]" title="VIEW LOCATION"></i>
                                <i onclick="deleteLocation(${id});" class="bi bi-trash-fill text-[15px] text-white p-[8px] bg-primary-color cursor-pointer hover:bg-[#2b0e0e]" title="DELETE LOCATION"></i>
                            </td>
                        </tr>
                    `;
                }).join('');

                const table = `
                    <table>
                        <thead><tr><th>SN</th><th>LOCATION NAME</th><th>CREATED BY</th><th>DATE</th><th>ACTION</th></tr></thead>
                        <tbody class="bg-white">${tableRows}</tbody>
                    </table>
                    <div class="my-[10px] flex justify-between">
                        <div class="text-[#3a4669]">
                            Showing ${pagination.from} to ${pagination.to} of ${pagination.total} entries
                        </div>

                        <div class="flex gap-1 mb-4">
                            <button class="text-sm py-[8px] px-[15px]" ${pagination.prevPageUrl ? `onclick="(${pagination.prevPageUrl})"` : 'disabled'}>PREVIOUS</button>
                            <button class="text-sm py-[8px] px-[15px]" ${pagination.nextPageUrl ? `onclick="(${pagination.nextPageUrl})"` : 'disabled'}>NEXT</button>
                        </div>
                    </div>
                `;
                container.html(table);
            }
        } else {
            container.html(`
                <table>
                    <thead><tr><th>SN</th><th>LOCATION NAME</th><th>CREATED BY</th><th>DATE</th><th>ACTION</th></tr></thead>
                    <tbody class="bg-white"></tbody>
                </table>
                ${noRecordFound(message)}
            `);
        }
    })
    .catch(error => {
        console.error('Error fetching locations:', error);
        container.html('<p>There was an error fetching the locations. Please try again later.</p>');
    });
}

function locationProfile(locationId){
    axios.get(`${endPoint}/admin/location/${locationId}`, { headers })
    .then(response => {
        const {data: locationData } = response.data;
        $('#locationName').val(locationData.locationName);
    })
    .catch(error => {
        console.error('Error fetching location:', error);
        container.html('<p>There was an error fetching the location. Please try again later.</p>');
    });
}

function updateLocation(locationId){
    const locationName = $('#locationName').val();

    if (locationName==''){
        showAlert('#warning-div', 'LOCATION NAME ERROR', 'All Fields are Required');
    }else{

        const btnText  = $('#submitBtn').html();
	    $('#submitBtn').html('<i id="spinner" class="bi bi-arrow-repeat"></i> UPDATING...');
	    document.getElementById('submitBtn').disabled = true;

        const formData = new FormData();
        formData.append('locationName', locationName);

        axios.put(`${endPoint}/admin/location/${locationId}`, formData, { headers })
        .then(response =>{

            const {success, message} = response.data;

            if (success){
                showAlert('#success-div', 'SUCCESS', message);
                $('#submitBtn').html(btnText);
                document.getElementById('submitBtn').disabled = false;
                allLocation(); alertClose();
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

function newLocation(){
    const locationName = $('#locationName').val();

    if (locationName==''){
        showAlert('#warning-div', 'LOCATION NAME ERROR', 'All Fields are Required');
    }else{

        const btnText  = $('#submitBtn').html();
	    $('#submitBtn').html('<i id="spinner" class="bi bi-arrow-repeat"></i> SUBMITTING...');
	    document.getElementById('submitBtn').disabled = true;

        const formData = new FormData();
        formData.append('locationName', locationName);

        axios.post(`${endPoint}/admin/location`, formData, { headers })
        .then(response =>{

            const {success, message} = response.data;

            if (success){
                showAlert('#success-div', 'SUCCESS', message);
                $('#submitBtn').html(btnText);
                document.getElementById('submitBtn').disabled = false;
                allLocation(); alertClose();
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

function allSlot(){
    const container = $('#fetchAllSlot');
    container.html(`<div class="ajax-loader"><br><img src="src/all-images/image-pix/ajax-loader.gif"/></div>`).fadeIn(500);

    axios.get(`${endPoint}/admin/slot`, { headers })
    .then(response => {
        const {success, message, data: fetch, pagination } = response.data;  
        if (success) {
            if (fetch.length > 0) {
                const tableRows = fetch.map((item, index) => {
                    const id = item.id;
                    const slotName = `${item.slotName.toUpperCase()}`;
                    const locationName = `${item.location.locationName.toUpperCase()}`;
                    const createdBy = item.createdBy;
                    const createdAt = item.created_at;

                    return `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${slotName}</td>
                            <td>${locationName}</td>
                            <td>${createdBy}</td>
                            <td>${createdAt}</td>
                            <td>
                                <i onclick="getFormWithId('slotProfile','${id}')" class="bi bi-pencil-square text-[15px] text-white p-[8px] bg-primary-color cursor-pointer hover:bg-[#444444]" title="VIEW LOCATION"></i>
                                <i onclick="deleteLocation(${id});" class="bi bi-trash-fill text-[15px] text-white p-[8px] bg-primary-color cursor-pointer hover:bg-[#2b0e0e]" title="DELETE LOCATION"></i>
                            </td>
                        </tr>
                    `;
                }).join('');

                const table = `
                    <table>
                        <thead><tr><th>SN</th><th>SLOT NAME</th><th>LOCATION NAME</th><th>CREATED BY</th><th>DATE</th><th>ACTION</th></tr></thead>
                        <tbody class="bg-white">${tableRows}</tbody>
                    </table>
                    <div class="my-[10px] flex justify-between">
                        <div class="text-[#3a4669]">
                            Showing ${pagination.from} to ${pagination.to} of ${pagination.total} entries
                        </div>

                        <div class="flex gap-1 mb-4">
                            <button class="text-sm py-[8px] px-[15px]" ${pagination.prevPageUrl ? `onclick="(${pagination.prevPageUrl})"` : 'disabled'}>PREVIOUS</button>
                            <button class="text-sm py-[8px] px-[15px]" ${pagination.nextPageUrl ? `onclick="(${pagination.nextPageUrl})"` : 'disabled'}>NEXT</button>
                        </div>
                    </div>
                `;
                container.html(table);
            }
        } else {
            container.html(`
                <table>
                    <thead><tr><th>SN</th><th>SLOT NAME</th><th>LOCATION NAME</th><th>CREATED BY</th><th>DATE</th><th>ACTION</th></tr></thead>
                    <tbody class="bg-white"></tbody>
                </table>
                ${noRecordFound(message)}
            `);
        }
    })
    .catch(error => {
        console.error('Error fetching slot:', error);
        container.html('<p>There was an error fetching the slot. Please try again later.</p>');
    });
}

function getSlot(slotId){
    axios.get(`${endPoint}/admin/slot/${slotId}`, { headers })
    .then(response => {
        const {data: slotData } = response.data;

        $('#slotName').val(slotData.slotName);

        $("#locationId").append('<option value="' + slotData.location.locationId + '" selected="selected">' + slotData.location.locationName +"</option>");
    })
    .catch(error => {
        console.error('Error fetching slot:', error);
        container.html('<p>There was an error fetching the slot. Please try again later.</p>');
    });
}

function newSlot(){
    const locationId = $('#locationId').val();
    const slotName = $('#slotName').val();
    const statusId = $('#statusId').val();

    if (locationId==''){
        showAlert('#warning-div', 'LOCATION NAME ERROR', 'All Fields are Required');
    }else if (slotName==''){
        showAlert('#warning-div', 'SLOT NAME ERROR', 'All Fields are Required');
    }else{

        const btnText  = $('#submitBtn').html();
	    $('#submitBtn').html('<i id="spinner" class="bi bi-arrow-repeat"></i> SUBMITTING...');
	    document.getElementById('submitBtn').disabled = true;

        const formData = new FormData();
        formData.append('locationId', locationId);
        formData.append('slotName', slotName);
        formData.append('statusId', statusId);

        axios.post(`${endPoint}/admin/slot`, formData, { headers })
        .then(response =>{

            const {success, message} = response.data;

            if (success){
                showAlert('#success-div', 'SUCCESS', message);
                $('#submitBtn').html(btnText);
                document.getElementById('submitBtn').disabled = false;
                allSlot(); alertClose();
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

function getLocation() {
    axios.get(`${endPoint}/admin/location`, { headers })
    .then(response => {
        const { data } = response.data;
        const options = data.map(({ id, locationName }) => 
            `<option value="${id}">${locationName}</option>`
        ).join('');
        $('#locationId').html(options);
    })
    .catch(error => {
        console.error('Error fetching location:', error);
    });
}








