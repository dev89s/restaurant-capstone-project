// const newApp = async () => {
//   const appsUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
//   const response = await fetch(appsUrl, {
//     method: 'POST',
//   });
//   return response;
// };

const getAppId = async () => {
  if (!localStorage.getItem('appId')) {
    // const response = await newApp();
    // const id = await response.text();
    localStorage.setItem('appId', JSON.stringify('SaLVil34SJvcimrApfni'));
    return 'SaLVil34SJvcimrApfni';
  }
  const id = JSON.parse(localStorage.getItem('appId'));
  return id;
};

export default getAppId;