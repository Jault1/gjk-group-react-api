import { useState, useEffect } from 'react';
import Table from './components/Table';
// import AddForm from './components/AddForm';

import './App.css';
//import mockAPI from './api/mockapi';
import axios from 'axios';

let BASE_URL = 'https://www.ncei.noaa.gov/cdo-web/api/v2/';
// let filterAPI = "sortfield=name"
// filterAPI = filterAPI + "&sortorder=desc"
// BASE_URL = BASE_URL + "?" + filterAPI;
console.log(BASE_URL)

// const BASE_URL = 'https://62ba9b04573ca8f8328762ca.mockapi.io';
const noaaAPI = axios.create({ baseURL: BASE_URL});
noaaAPI.get('locations', {headers:{token:process.env.REACT_APP_NOAA_TOKEN}})
.then((response) => console.log(response.data.results));

function App() {
  const [products, setProducts] = useState([]);

  // const apiGet = async () => {
  //   try {
  //     const response = await mockAPI.get(`/product/`);
  //     console.log(response.data);
  //     setProducts(response.data);    
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }
  // const apiPost = async (newProduct) => {
  //   try {
  //     const response = await mockAPI.post(`/product`, newProduct)
  //     console.log(response.data);
  //     apiGet();
  //   } catch(error) {
  //     console.log(error.message);
  //   };
  // }
  
  // useEffect(() => {
  //   apiGet();
  // }, [])

  return (
    <div className="App">
      <h1>Weather</h1>
      {/* <button onClick={apiGet}>Load Products</button> */}
      { products && <Table list={products} /> }
       {/*<AddForm handlerAddItem={apiPost} /> */}
    </div>
  );
}

export default App;