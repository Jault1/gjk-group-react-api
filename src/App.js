// import { useState, useEffect } from "react";
import TableWeekly from "./components/TableWeekly";
import TableDaily from "./components/TableDaily";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
// import Table from "./components/Table";
import Home from "./components/Home";
import { Search } from "./components/Search";
// import {ScaleLoader} from 'react-spinners';
import conditions from './weatherCodes.json';


conditions = conditions.weatherCodeFullDay;


function App() {


  return (
    <div className="App">
      <Header />
          <BrowserRouter>
        <div>    
          <Routes >
          <Route path='/Search' element={<Search/>}/>
          <Route path='/' element={<Home/>} />
          <Route path='/Daily' element={<TableDaily/>} />
          <Route path='/Weekly' element={<TableWeekly/>} />
          </Routes>
        </div>
      </BrowserRouter>

      {/* <input type="text" className="me-3" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter your city name"/>
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
      )} */}

      <Footer />
    </div>
  );
}

export default App;