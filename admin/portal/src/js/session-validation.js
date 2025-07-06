function sessionValidation() {
    if (!accessToken) {
      sessionStorage.clear();
      window.location.href = websiteUrl + '/admin';
    } 
}

function logOut(){
    sessionStorage.clear();
    window.location.href = websiteUrl + '/admin';
}
  