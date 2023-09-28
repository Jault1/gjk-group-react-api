import { useState, useEffect } from "react";
import TableWeekly from "./TableWeekly";
import TableDaily from "./TableHourly"
import { getWeatherData } from "../api/weatherapi";
import {ScaleLoader} from 'react-spinners';
//import conditions from '../weatherCodes.json';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import FPng from "./../images/f.png";
import CPng from "./../images/c.png";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#5985B2",
};

//conditions = conditions?.weatherCodeFullDay;

export function SearchHourly (){ 
    
    const [weatherdata, setWeatherData] = useState();
    const [city, setCity] = useState("London");
    const [loading, setLoading] = useState(false); // Page or api loading?
    // Temp chart modal window
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getData = async () => {
      
      try{
          setLoading(true);
          const data = await getWeatherData(city);
          setWeatherData(data);
          console.log(weatherdata);
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
    // useEffect(() => {
    //   getData();
    // }, []);
  
  return (<>

<h1 className="pb-3">Get my weather.</h1>

<input type="text" className="me-3" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter your city name" />
          <button type="button" className="btn btn-primary smb-5" onClick={() => getData()}>Search</button>

          <button type="button" className="btn btn-outline-secondary m-2" onClick={handleShow}>
          &deg;F vs &deg;C
      </button>

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
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Fahrenheit vs Celcius</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img
                className="img-fluid"
                src={FPng}
                alt="Fahrenheit"
                height="20"
              /> <br />
              <img
                className="img-fluid"
                src={CPng}
                alt="Celius"
                height="20"
              />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">Yep</Button> */}
        </Modal.Footer>
      </Modal>

            <TableDaily list={weatherdata?.timelines?.hourly} />
            </>
          ) : null}
        </>
      )}

     
    
  </>)
}