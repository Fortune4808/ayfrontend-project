$(document).ready(function() {
    const images = ["./src/all-images/bg-pix/cover-pix.jpg"];
    $.backstretch(images, { duration: 4000, fade: 2000 });
  });

  function capitalizeWords(str) {
	return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
  }

   function formatNumberWithComma(number) {
    let num = parseFloat(number);
    return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

  function expandLink(ids){
    $('#'+ids+'-li').toggle('slow');
  }

  function getPage(page) {
    $('#main').html('<div class="ajax-loader"><br><img src="src/all-images/image-pix/ajax-loader.gif"/></div>').fadeIn(500);
    const action='getPage';
    const formData ='action='+ action+'&page='+ page;
    axios.post(userPortalLocalUrl, formData)
        .then(response => {
        $('#main').html(response.data);
    });
}

function getFormWithId(page, ids) {
    $('.overlay-div').html('<div class="ajax-loader"><br><img src="src/all-images/image-pix/ajax-loader.gif"/></div>').fadeIn(500);
    const action='getFormWithId';
    const formData ='action='+ action+'&page='+ page + '&ids=' + ids;
    axios.post(userPortalLocalUrl, formData)
        .then(response => {
        $('.overlay-div').html(response.data);
    });
}

function getUser(){
    const fullName = `${userData.firstName} ${userData.middleName} ${userData.lastName}`;
    const passportUrl = userData.passportUrl;

    $('#welcomeName').html(fullName);
    $("#pictureBox1").attr('src', passportUrl);
}

function allSlot(){
    const container = $('#fetchAllSlot');
    container.html(`<div class="ajax-loader"><br><img src="src/all-images/image-pix/ajax-loader.gif"/></div>`).fadeIn(500);

    axios.get(`${endPoint}/slots`, { headers })
    .then(response => {
        const {success, message, data: fetch, pagination } = response.data;  
        if (success) {
            if (fetch.length > 0) {
                const tableRows = fetch.map((item, index) => {
                    const id = item.id;
                    const slotName = `${item.slotName.toUpperCase()}`;
                    const locationName = `${item.location.locationName.toUpperCase()}`;
                    const statusId = item.status.statusId;
                    const statusName = item.status.statusName;
                    const createdAt = item.created_at;

                    return `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${slotName}</td>
                            <td>${locationName}</td>
                            <td>${createdAt}</td>
                            <td>
                                <span class="${statusId == 1 
                                    ? 'bg-emerald-500 text-white px-2 py-1 rounded font-semibold' 
                                    : 'bg-red-100 text-red-700 px-2 py-1 rounded italic'}">
                                    ${statusId == 1 ? 'AVAILABLE' : 'OCCUPIED'}
                                </span>
                            </td>
                            <td>
                                <span class="${statusId == 1 
                                    ? 'bg-emerald-500 hover:bg-emerald-600 text-white px-2 py-1 rounded font-semibold cursor-pointer transition-colors duration-200' 
                                    : 'bg-gray-200 text-gray-600 px-2 py-1 rounded italic'}"
                                    ${statusId == 1 ? `onclick="getFormWithId('bookingForm','${id}')"` : ''}>
                                    ${statusId == 1 ? 'BOOK NOW' : 'NOT AVAILABLE'}
                                </span>
                            </td>
                        </tr>
                    `;
                }).join('');

                const table = `
                    <table>
                        <thead><tr><th>SN</th><th>SLOT NAME</th><th>LOCATION NAME</th><th>DATE</th><th>STATUS</th><th>ACTION</th></tr></thead>
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
                    <thead><tr><th>SN</th><th>SLOT NAME</th><th>LOCATION NAME</th><th>CREATED BY</th><th>DATE</th><th>STATUS</th><th>ACTION</th></tr></thead>
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



