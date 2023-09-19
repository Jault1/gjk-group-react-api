import styles from "./Table.module.css";
import img1000 from "./../images/icons/1000.png";
import img1001 from "./../images/icons/1001.png";
import img4000 from "./../images/icons/4000.png";
import { Link } from "react-router-dom";
import img1101 from "./../images/icons/partly_cloudy.png";
import img8000 from "./../images/icons/storms.png";
// import conditions from './../weatherCodes.json';

function TableDaily({ list, conditions }) {
  console.log(list);
  //console.log(conditions)
  return (
    <div>
      {/* <p>{list[0].name}</p>  */}
      <h2>Today's Forecast</h2>
      <table className={styles.table}>
        <thead>
          <tr className="tableHeader">
            <th>Hour</th>
            <th>Conditions</th>
            <th>Visual conditions</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Wind Speed</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((item) => {
              const d = new Date(item.time);
              let hour = d.getHours();
              const code = item.values.weatherCode;
              return (
                <tr key={item.id}>
                  {/* <td>{item.time}</td> */}
                  <td>{hour}:00</td>
                  <td>{conditions[code]}</td>

                  <td>
                    {
                      // sun
                      [code] == 1000 ? (
                        <img
                          className="img-fluid"
                          src={img1000}
                          alt="sunny"
                          height="20"
                        />
                      ) : (
                        <span></span>
                      )
                    }
                    {
                      // clouds
                      [code] == 1001 ? (
                        <img
                          className="img-fluid"
                          src={img1001}
                          alt="cloudy"
                          height="20"
                        />
                      ) : (
                        <span></span>
                      )
                    }
                    {
                      //rain
                      [code] == 4000 ? (
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
                      //rain
                      [code] == 4001 ? (
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
                      //partly cloudy or mostly cloudy
                      [code] == 1101 || [code] == 1102 ? (
                        <img
                          className="img-fluid"
                          src={img1101}
                          alt="partly cloudy"
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
                      [code] == 8003 ||
                      [code] == 8002 ? (
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

                  <td>{item.values.temperature.toFixed(0) + "\u00b0 C"}</td>
                  <td>{item.values.humidity.toFixed(0) + "%"}</td>
                  <td>{item.values.windSpeed.toFixed(1) + " m/s"}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Link to="/Weekly">
        <button type="button" className="btn btn-light">
          {" "}
          Weekly Forecast{" "}
        </button>
      </Link>
    </div>
  );
}

export default TableDaily;
