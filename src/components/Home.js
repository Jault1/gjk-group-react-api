import WorldMap from '../images/WorldMap.png';
import { Link } from 'react-router-dom';

function Home(){
    return(
    <>
    <div className="home">
    <Link to="/search">
   <img src={WorldMap} alt="Map Of Whole World" />
   </Link>
   <p><center> Click an image to continue </center></p>
   </div>
   </>
   )}

export default Home