// import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import Home from "./components/Home";
import { SearchWeekly } from "./components/SearchWeekly";
import { SearchHourly } from "./components/SearchHourly";

import conditions from './weatherCodes.json';

conditions = conditions.weatherCodeFullDay;


function App() {


  return (
    <div className="App">
      <Header />
          <BrowserRouter>
        <div>    
          <Routes >
          <Route path='/' element={<Home/>} />
          <Route path='/Hourly' element={<SearchHourly/>}/>
          <Route path='/Weekly' element={<SearchWeekly/>} />
          </Routes>
        </div>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;