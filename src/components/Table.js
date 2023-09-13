import styles from './Table.module.css';
function Table({ list }) {
  return (
    <div>
       {/* <p>{list[0].name}</p>  */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>dewpoint</th>
            <th>humidity</th>
            <th>Temp</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((item) => (
              <tr>
              {/* //  key={item.id} */}
                {/* <td>{item.dewPoint}</td>
                <td>{item.humidity}</td> */}
                <td>{item.temperature}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;