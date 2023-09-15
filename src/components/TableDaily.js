import styles from './Table.module.css';

function TableDaily({ list }) {
  console.log(list)
  const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return (
    <div>
       {/* <p>{list[0].name}</p>  */}
       <h2>6-Day Forecast</h2>
      <table className={styles.table}>
        <thead>
          <tr className="tableHeader">
            <th>Day</th>
            <th>Temperature</th>
            <th>Rain</th>
            <th>Humidity</th>
            <th>Cloud Cover</th>
            <th>Wind Speed</th>
          </tr>
        </thead>
         <tbody>
           {list &&
            list.map((item) => {
              const d = new Date(item.time);
              let day = dayArray[d.getDay()]; 
              return (
              <tr key={item.id}>
                {/* <td>{item.time}</td> */}
                <td>{day}</td>
                <td>{(item.values.temperatureAvg).toFixed(0) + '\u00b0F'}</td> 
                <td>{(item.values.rainAccumulationAvg).toFixed(1) + ' in'}</td>  
                <td>{(item.values.humidityAvg).toFixed(0) + ' g/m3'}</td>  
                <td>{(item.values.cloudCoverAvg).toFixed(0) + '%'}</td>
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