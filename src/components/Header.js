import styles from './Header.module.css';

import banner from './../images/AdobeStock_211524227_Preview.jpeg';

function Header() {
  return (
<>
<div id="header" className="header container-fluid text-center"> 
{/* <img alt="logo" src="../images/horizontal.png" width="220" height="auto" border="0" hspace="0" vspace="0" style="display:block; vertical-align:top;padding-bottom:32px;"> */}
  <h2 className="">MyWeather App 2023</h2>
  <h3 className="pb-0">Lorem ipsum</h3>
  <a href="#" target="_blank"  className=""><img id="banner" className="img-fluid text-center p-5" src={banner} alt="banner" height='20' /></a> 
   {/* <img id="banner-mob" src="../images/banner-mob.jpg" alt="Weather App"> */}
</div>
                   

</>                    
)};

export default Header;