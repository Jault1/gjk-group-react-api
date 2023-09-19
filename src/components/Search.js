import { useState, useEffect } from "react";
import TableWeekly from "./TableWeekly";
import TableDaily from "./TableDaily"
import { getWeatherData } from "../api/weatherapi";
import {ScaleLoader} from 'react-spinners';
import conditions from '../weatherCodes.json';

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#5985B2",
};

conditions = conditions.weatherCodeFullDay;

export function Search (){ 
    
    const [weatherdata, setWeatherData] = useState();
    const [city, setCity] = useState("London");
    const [loading, setLoading] = useState(false); // Page or api loading?

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

<h1>Get my weather.</h1>

      <input type="text" className="me-3" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter your city name" />
          <button type="button" className="btn btn-primary smb-5" onClick={() => getData()}>Search</button>

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
            <TableWeekly list={weatherdata?.timelines?.daily} conditions={conditions} />
            {/* <TableDaily list={weatherdata?.timelines?.hourly} conditions={conditions} /> */}
            </>
          ) : null}
        </>
      )}

     
    
  </>)
}