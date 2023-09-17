import styles from './Table.module.css';
import img1000 from './../images/icons/1000.png';
import img1001 from './../images/icons/1001.png';
import img4000 from './../images/icons/4000.png';


function TableDaily({ list, conditions }) {
  console.log(list)
  console.log(conditions)
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
              const code = item.values.weatherCodeMax;
              return (
              <tr key={item.id}>
                {/* <td>{item.time}</td> */}
                <td>{hour}</td>
                <td>{conditions[code]}</td>

                  <td>
                  { // sun
                      ([code] == 1000)
                      ? <img className="img-fluid" src={img1000} alt="sunny" height='20' /> 
                      : <span></span> 
                    }
                    { // clouds
                      ([code] == 1001)
                      ? <img className="img-fluid" src={img1001} alt="cloudy" height='20' /> 
                      : <span></span> 
                    }
                    { //rain
                      ([code] == 4000)
                      ? <img className="img-fluid" src={img4000} alt="raining" height='20' /> 
                      : <span></span> 
                    }
                    { //rain
                      ([code] == 4001)
                      ? <img className="img-fluid" src={img4000} alt="raining" height='20' /> 
                      : <span></span> 
                    }
    
                    
                    
                    
                    
                    </td>

                <td>{(item.values.temperatureAvg).toFixed(0) + '\u00b0 C'}</td> 
                <td>{(item.values.humidityAvg).toFixed(0) + '%'}</td>  
                <td>{(item.values.windSpeedAvg).toFixed(1) + ' m/s'}</td>
             </tr>
              )
            })} 
        </tbody> 
      </table>
    </div>
  );
}

export default TableDaily;