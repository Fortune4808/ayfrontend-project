$(document).ready(function() {
    var images = ["./src/all-images/bg-pix/cover-pix.jpg"];
    $.backstretch(images, { duration: 4000, fade: 2000 });
  });

  function capitalizeWords(str) {
	return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
  }

   function formatNumberWithComma(number) {
    let num = parseFloat(number);
    return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

  function _expand_link(ids){
    $('#'+ids+'-li').toggle('slow');
  }

  function _get_page(page) {
  $('#main').html('<div class="ajax-loader"><br><img src="src/all-images/image-pix/ajax-loader.gif"/></div>').fadeIn(500);
  var action='get_page';
  var formData ='action='+ action+'&page='+ page;
  axios.post(student_portal_local_url, formData)
    .then(response => {
      $('#main').html(response.data);
    });
}

function fetchStudent(){
  axios.post(endpoint + '/student/fetch-student-api?access_key='+access_key, null, { headers: apikey })
  .then(response =>{
      var success = response.data.success;
       var access_check = response.data.check;
        var fetch = response.data.data[0];
        
        if (access_check==0){
          logOut()
        }else{
         if (success){
           var first_name = fetch.first_name	
          var middle_name = fetch.middle_name	
          var last_name = fetch.last_name
          var fullname = first_name + ' ' + middle_name + ' ' + last_name
          var matricno = fetch.matric_number
          var faculty_name = fetch.faculty_name
          var programme_name = fetch.programme_name	
          var level_name	= fetch.level_name	
          var session_name	= fetch.session_name	

          var passport = fetch.passport;
          var documentStoragePath = fetch.documentStoragePath + '/' + passport;
         }
        }

        $('#fullname').html(fullname)
        $('#matricno').html(matricno)
          $('#school').html(faculty_name)
        $('#programme').html(programme_name)
          $('#level').html(level_name)
        $('#session').html(session_name)
        $('#welcome_name').html(first_name)
        $("#pictureBox1").attr('src', documentStoragePath);
  })
}

function fetchPaymentHistory() {
    const container = $('#fetch_all_payment_history');
    container.html('<div class="ajax-loader"><br><img src="src/all-images/image-pix/ajax-loader.gif"/></div>').fadeIn(500);

    const search_txt = $('#search').val();
    const formData = new FormData();
    formData.append('search_txt', search_txt);

    axios.post(`${endpoint}/student/fetch-all-payment-history-api?access_key=${access_key}`, formData, { headers: apikey })
    .then(response => {
        const { check: access_check, success, message, data: fetch } = response.data;

        if (access_check == 0) return logOut();

        if (success && fetch.length > 0) {
            const tableRows = fetch.map((item, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.matric_number}</td>
                    <td>${item.payment_reference}</td>
                    <td>${item.fee_name.toUpperCase()}</td>
                    <td class="font-bold">N ${formatNumberWithComma(item.payment_amount)}</td>
                    <td>${item.session_name}</td>
                    <td>${item.payment_method.toUpperCase()}</td>
                    <td>${item.status.toUpperCase()}</td>
                    <td>${item.created_time}</td>
                </tr>
            `).join('');

            const tableHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>SN</th><th>MATRIC NUMBER</th><th>PAYMENT REFERENCE</th><th>PAYMENT TYPE</th>
                            <th>AMOUNT</th><th>SESSION</th><th>PAYMENT METHOD</th><th>STATUS</th><th>DATE</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white">${tableRows}</tbody>
                </table>
            `;

            container.html(tableHTML);
        } else {
            const emptyTable = `
                <table>
                    <thead>
                        <tr>
                            <th>SN</th><th>MATRIC NUMBER</th><th>PAYMENT REFERENCE</th><th>PAYMENT TYPE</th>
                            <th>AMOUNT</th><th>SESSION</th><th>PAYMENT METHOD</th><th>STATUS</th><th>DATE</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white"></tbody>
                </table>
                <div class="bg-[#FAF3F0] text-[#3a4669] border border-[#F2BDA2] w-full mx-auto mt-[5px] flex gap-1 p-[10px] pl-[30px] text-sm">
                    <i class="bi bi-bell"></i><p>${message}</p>
                </div>
            `;
            container.html(emptyTable);
        }
    })
    .catch(error => {
        console.error('Error fetching payment history:', error);
        container.html('<p>There was an error fetching the payment history. Please try again later.</p>');
    });
}
