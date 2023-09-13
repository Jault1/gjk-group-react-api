import axios from 'axios';

const BASE_URL = 'https://www.ncei.noaa.gov/cdo-web/api/v2/';

console.log(BASE_URL)

// const BASE_URL = 'https://62ba9b04573ca8f8328762ca.mockapi.io';
const mockAPI = axios.create({ baseURL: BASE_URL});

export default mockAPI

