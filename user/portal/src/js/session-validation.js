function sessionValidation() {
    if (!accessToken) {
      sessionStorage.clear();
      window.location.href = websiteUrl + '/user'; 
    } 
}

function logOut(){
    sessionStorage.clear();
    window.location.href = websiteUrl + '/user'; 
}

 