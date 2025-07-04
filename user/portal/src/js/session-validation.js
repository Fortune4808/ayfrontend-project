function sessionValidation() {
    const accessKey = sessionStorage.getItem('access_key');
    
    if (!accessKey) {
      
      sessionStorage.clear();
      window.location.href = website_url + '/student'; 
      
    } 
}

    function logOut(){
        sessionStorage.clear();
        window.location.href = website_url + '/student'; 
    }

 