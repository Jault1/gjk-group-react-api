import { useState, useEffect } from 'react';
import Table from './components/Table';
// import AddForm from './components/AddForm';
import './App.css';
import mockAPI from './api/mockapi';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [products, setProducts] = useState([]);

  const apiGet = async () => {
    try {
      const response = await mockAPI.get('locations', {headers:{token:process.env.REACT_APP_NOAA_TOKEN}})
      .then((response) => console.log(response.data.results));
      
      setProducts(response.data);    
    } catch (error) {
      console.log(error.message);
    }
  }
  // const apiPost = async (newProduct) => {
  //   try {
  //     const response = await mockAPI.post(`/product`, newProduct)
  //     console.log(response.data);
  //     apiGet();
  //   } catch(error) {
  //     console.log(error.message);
  //   };
  // }
  
  useEffect(() => {
    apiGet();
  }, [])

  return (
    <div className="App">
      <Header />
      <h1>Weather</h1>
     <button onClick={apiGet}>Load Products</button>
      { products && <Table list={products} /> }
       {/* <AddForm handlerAddItem={apiPost} /> */}
       <Footer />
    </div>
  );
}

export default App;