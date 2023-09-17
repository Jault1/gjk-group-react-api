import { useState, useEffect } from "react";
import TableWeekly from "./components/TableWeekly";
import TableDaily from "./components/TableDaily";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import Table from "./components/Table";
import Home from "./components/Home";
import { Search } from "./components/Search";
import {ScaleLoader} from 'react-spinners';
import conditions from './weatherCodes.json';


conditions = conditions.weatherCodeFullDay;


function App() {


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
          <BrowserRouter>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'search'} className="nav-link"> Home </Link></li>
            <li><Link to={'tableDaily'} className="nav-link">Daily</Link></li>
            <li><Link to={'table'} className="nav-link">Table</Link></li>
          </ul>
          </nav>
          <hr/>
      
          <Routes >
          <Route path='/Search' element={<Search/>}/>
          <Route path='/' element={<Home/>} />
          <Route path='/TableDaily' element={<TableDaily/>} />
          <Route path='/Table' element={<Table/>} />
          </Routes>
        </div>
      </BrowserRouter>

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
            <>
            <TableWeekly list={weatherdata.timelines.daily} conditions={conditions} />
            <TableDaily list={weatherdata.timelines.daily} conditions={conditions} />
            </>
          ) : null}
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;