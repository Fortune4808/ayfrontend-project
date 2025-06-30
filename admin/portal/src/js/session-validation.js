function _session_validation() {
    const access_key = sessionStorage.getItem('access_key');
    
    if (!access_key) {
      
      sessionStorage.clear();
      window.location.href = website_url + '/admin'; 
      
    } 
  }


  function _logout_(){
    sessionStorage.clear();
    window.location.href = website_url + '/admin'; 
  }
  