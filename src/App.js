import { useState, useEffect } from "react";
import TableDaily from "./components/TableDaily";
import "./App.css";
import { getWeatherData } from "./api/weatherapi";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {ScaleLoader} from 'react-spinners';

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#5985B2",
};

function App() {
  const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState("New York City");
  const [loading, setLoading] = useState(false); // Page or api loading?
  let [color, setColor] = useState("#ffffff"); // loader/spinner color

  const getData = async () => {
    try{
        setLoading(true);
        const data = await getWeatherData(city);
        setWeatherData(data);
        setLoading(false);
    }catch(error) {
      console.log(error.message);
      setLoading(false);
    }
  }
  const override = `
  display: block;
  margin: 0 auto;
  border-color: #5985B2;
  `;
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

  return (
    <div className="App">
      <Header />
      <h1>Get my weather.</h1>

      <input type="text" className="me-3" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter your city name"/>
          <button type="button" className="mb-5" onClick={() => getData()}>Search</button>

          {loading ? (
          <div className="loader-container">
            <ScaleLoader
              css={override}
              size={300}
              color= {"#5985B2"}
              loading= {loading}
              />
          </div>

        ) : (

          <>
          {weatherdata !== null ? (
            // console.log(weatherdata.timelines.daily)
            <TableDaily list={weatherdata.timelines.daily} />
          ) : null}
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
