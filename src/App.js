import { useState, useEffect } from 'react';
import Table from './components/Table';
import './App.css';
import {getWeatherData} from './api/weatherapi';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState('New York City');
  const [loading, setLoading] = useState(false);  // Page or api loading?

  const getData = async () => {
    try{
        setLoading(true);
        const data = await getWeatherData(city);
        setWeatherData(data);
        setLoading(false);
        console.log("Inside getData")
    }catch(error) {
      console.log(error.message);
      setLoading(false);
    }
  }
  // const override = `
  // display: block;
  // margin: 0 auto;
  // border-color: red;
  // `;
  useEffect(() => {
    getData();
  }, []);

// const params = {
//   apikey: '4fL4g5wwRWiCXgM9cIQQncjVY9yFv9No',
//   location: 'new york'
// }

//   axios.get('https://api.tomorrow.io/v4/weather/forecast', {params})
//     .then(response => {
//       //const apiResponse = response.data;
//       //console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
//       console.log(response);
//     }).catch(function (error) {
//         console.log(error.config);
//     });


  // const apiGet = async () => {
  //   try {
  //     const response = await mockAPI.get('locations', {headers:{token:process.env.REACT_APP_NOAA_TOKEN}})
  //     .then((response) => console.log(response.data.results));
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
  
  //  useEffect(() => {
  //    apiGet();
  //  }, [])

  return (
    <div className="App">
      <Header />
      <h1>Weather</h1>

      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter your city name"/>
      <button type="button" onClick={() => getData()}>Search</button>
      { loading && <Table list={products} /> }
     <Table list={ weatherdata } /> 
     <Footer />
    </div>
  );
}

export default App;