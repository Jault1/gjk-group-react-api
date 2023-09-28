// import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
//import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from "./components/Home";
import { SearchWeekly } from "./components/SearchWeekly";
import { SearchHourly } from "./components/SearchHourly";

//import conditions from './weatherCodes.json';

//conditions = conditions?.weatherCodeFullDay;

function App() {

  return (
    <div className="App">
      <Header />
          <HashRouter>
        <div>    
          <Routes >
          <Route path='/' element={<Home/>} />
          <Route path='/Hourly' element={<SearchHourly/>}/>
          <Route path='/Weekly' element={<SearchWeekly/>} />
          </Routes>
        </div>
      </HashRouter>

      <Footer />
    </div>
  );
}

export default App;