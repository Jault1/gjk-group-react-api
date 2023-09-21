import TableWeekly from "./components/TableWeekly";
import TableDaily from "./components/TableDaily";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import Home from "./components/Home";
import { Search } from "./components/Search";
import conditions from './weatherCodes.json';


conditions = conditions.weatherCodeFullDay;


function App() {


  return (
    <div className="App">
      <Header />

          <BrowserRouter>
        <div>    
          <Routes >
          <Route path='/Search' element={<Search/>}>
            <Route path='Daily/:locationID' element={<TableDaily/>} />
            <Route path='Weekly' element={<TableWeekly/>} />
          </Route>
          <Route path='/' element={<Home/>} />

          </Routes>
        </div>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;