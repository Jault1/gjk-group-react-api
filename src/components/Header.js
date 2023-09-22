//import styles from './Header.module.css';
import { NavLink } from "react-router-dom";
import banner from "./../images/AdobeStock_211524227.png";

function Header() {
  return (
    <>
      <img
        id="banner"
        className="img-fluid"
        src={banner}
        alt="banner"
        height="20"
      />
      <div
        id="header"
        className="header container-fluid p-5 mb-5 bg-primary text-white text-center"
      >
        <h1 className="mb-1">MyWeather App</h1>
        <p>
          <em>Data we can join together and share.</em>
        </p>

      </div>

    </>
  );
}

export default Header;
