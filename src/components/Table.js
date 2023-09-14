import styles from './Table.module.css';
function Table({ list }) {
  console.log(list)
  return (
    <div>
       {/* <p>{list[0].name}</p>  */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Weather Code</th>
            <th>Precipitation Probability</th>
            <th>Temp</th>
          </tr>
        </thead>
         <tbody>
           {list &&
            list.map((item) => ( 
              <tr key={item.id}>
                 <td>{item.weatherCode}</td>
                <td>{item.precipitationProbability}</td> 
                <td>{item.temperature}</td>  
              </tr>
           ))} 
        </tbody> 
      </table>
    </div>
  );
}

export default Table;