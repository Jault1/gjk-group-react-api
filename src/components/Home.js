import WorldMap from '../images/WorldMap.png';
import { Link } from 'react-router-dom';

function Home(){
    return(
    <>
    <div className="home">
    <Link to="/Weekly">
   <img className="img-fluid" src={WorldMap} alt="Map Of Whole World" />
   </Link>
   <center><h3 className="pt-5"> Click the image to continue </h3></center>
   </div>
   </>
   )}

export default Home