import styles from "./Table.module.css";
import img1000 from "./../images/icons/1000.png";
import img1001 from "./../images/icons/1001.png";
import img4000 from "./../images/icons/4000.png";
import img1101 from "./../images/icons/partly_cloudy.png";
import img8000 from "./../images/icons/storms.png";
import FPng from "./../images/f.png";
import CPng from "./../images/c.png";

import { Link } from "react-router-dom";

import { Fragment } from "react"; // Used to create a unique key ID in the table

function TableDaily({ list, conditions }) {
  console.log(list);

  const dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div>
      <Link to="/Weekly">
        <button type="button" className="btn btn-secondary padButtonTop">
          {" "}
          View weekly forecast{" "}
        </button>
      </Link>

      <h2 className="pt-5">Hourly (5-day) forecast</h2>
      {/* <img className="img-fluid" src={FPng} alt="Fahrenheit" height="20" />
      <img className="img-fluid" src={CPng} alt="Celius" height="20" /> */}

      <table className={styles.table}>
        <thead>

          <tr className="tableHeader">
            <th>Hour</th>
            <th>Conditions</th>
            <th>Visual</th>
            <th>Temps</th>
            <th>Humidity</th>
            <th>Wind Speed</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((item) => {
              const da = new Date(item.time);
              let hour = da.getHours();

              const ti = new Date(item.time);
              let day = dayArray[ti.getDay()];
              const code = item.values.weatherCode;
              return (
                <tr key={item.time}>
                  <td key={item.time}>
                    {day} {hour}:00
                  </td>
                  <td className="text-center">{conditions[code]}</td>

                  <td>
                    [{[code]}] <br />
                    {[code] == 1000 || // clear, sunny
                    [code] == 1100 ? ( // mostly clear
                      <img
                        className="img-fluid"
                        src={img1000}
                        alt="sunny"
                        height="20"
                      />
                    ) : (
                      <span></span>
                    )}
                    {[code] == 1101 ? ( // partly cloudy
                      <img
                        className="img-fluid"
                        src={img1101}
                        alt="cloudy"
                        height="20"
                      />
                    ) : (
                      <span></span>
                    )}
                    {[code] == 1001 || // cloudy
                    [code] == 1102 ? ( // mostly cloudy
                      <img
                        className="img-fluid"
                        src={img1001}
                        alt="cloudy"
                        height="20"
                      />
                    ) : (
                      <span></span>
                    )}
                    {
                      //light rain
                      [code] == 4000 || // drizzle
                      [code] == 4001 ||
                      [code] == 4200 ? ( // light rain
                        <img
                          className="img-fluid"
                          src={img4000}
                          alt="raining"
                          height="20"
                        />
                      ) : (
                        <span></span>
                      )
                    }
                    {
                      //thunderstorm, mostly clear and thunderstorm, partly cloudy and thunderstorm, mostly cloudy and thunderstorm
                      //
                      [code] == 8000 ||
                      [code] == 8001 ||
                      [code] == 8002 ||
                      [code] == 8003 ? (
                        <img
                          className="img-fluid"
                          src={img8000}
                          alt="storms"
                          height="20"
                        />
                      ) : (
                        <span></span>
                      )
                    }
                  </td>
                  {/* item.values.temperature.toFixed(0) + "\u00b0 C" + " | " + */}
                  <td>
                    {(item.values.temperature * 1.8 + 32).toFixed(0) +
                      "\u00b0 F"}{" "}
                    <br />
                    {item.values.temperature.toFixed(0) + "\u00b0 C"}
                  </td>
                  <td>{item.values.humidity.toFixed(0) + "%"}</td>
                  <td>{item.values.windSpeed.toFixed(1) + " m/s"}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
     
    </div>
  );
}

export default TableDaily;
