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

function getUser(){
    const fullName = `${userData.firstName} ${userData.middleName} ${userData.lastName}`;
    const passportUrl = userData.passportUrl;

    $('#welcomeName').html(fullName);
    $("#pictureBox1").attr('src', passportUrl);
}



