import styles from './Table.module.css';

function TableDaily({ list, conditions }) {
  console.log(list)
  console.log(conditions)
  const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return (
    <div>
       {/* <p>{list[0].name}</p>  */}
       <h2>6-Day Forecast</h2>
      <table className={styles.table}>
        <thead>
          <tr className="tableHeader">
            <th>Day</th>
            <th>Conditions</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Wind Speed</th>
          </tr>
        </thead>
         <tbody>
           {list &&
            list.map((item) => {
              const d = new Date(item.time);
              let day = dayArray[d.getDay()]; 
              const code = item.values.weatherCodeMax;
              return (
              <tr key={item.id}>
                {/* <td>{item.time}</td> */}
                <td>{day}</td>
                <td>{conditions[code]}</td>
                <td>{(item.values.temperatureAvg).toFixed(0) + '\u00b0 F'}</td> 
                <td>{(item.values.humidityAvg).toFixed(0) + '%'}</td>  
                <td>{(item.values.windSpeedAvg).toFixed(1) + ' mph'}</td>
             </tr>
              )
            })} 
        </tbody> 
      </table>
    </div>
  );
}

export default TableDaily;