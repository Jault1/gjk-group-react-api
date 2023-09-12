import axios from 'axios';

/*
  Base URL of the backend server will be provided/updated during class
*/

 const BASE_URL = 'https://www.ncei.noaa.gov/cdo-web/api/v2/';
 const myNoaaToken = 'QmBCeBEMwKApaAWEMAZcVeHAbhKZoAeB';

// const BASE_URL = 'https://62ba9b04573ca8f8328762ca.mockapi.io';
const noaaAPI = axios.create({ baseURL: BASE_URL });

export default mockAPI