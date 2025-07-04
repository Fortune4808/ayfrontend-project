const websiteUrl='http://localhost/aytech-frontend' /// website url ///
const accountLocalUrl=websiteUrl+'/user/config/code'; /// for account local url ///
const adminLocalUrl=websiteUrl+'/admin/config/code'; /// for admin local url ///
const adminPortalLocalUrl=websiteUrl+"/admin/portal/config/code"; /// for portal local url ////
const userPortalLocalUrl=websiteUrl+"/user/portal/config/code"; /// for user portal local url ////
const endPoint='http://localhost:8000/api'; /// api endpoint url ///
const apiKey='base64:iAUaZdO12NwuFnYCls6L9eFIlrq0hmuyg7KegXsKHK0='; /// apikey //
const portalUrl=websiteUrl+'/admin/portal';
const userPortalUrl=websiteUrl+'/user/portal';

const accessToken = sessionStorage.getItem('accessToken');
const staffId = sessionStorage.getItem('staffId');
const userId = sessionStorage.getItem('userId');
const staffData = JSON.parse(sessionStorage.getItem('staffData'));
const userData = JSON.parse(sessionStorage.getItem('userData'));

const headers = {
    'x-api-key': apiKey,
    Authorization: `Bearer ${accessToken}`
};

