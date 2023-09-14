//import styles from './Header.module.css';

import banner from './../images/AdobeStock_211524227.png';

function Header() {
  return (
<>
<img id="banner" className="img-fluid" src={banner} alt="banner" height='20' />
<div id="header" className="header container-fluid p-5 mb-5 bg-primary text-white text-center"> 
{/* <img alt="logo" src="../images/horizontal.png" width="220" height="auto" border="0" hspace="0" vspace="0" style="display:block; vertical-align:top;padding-bottom:32px;"> */}
  <h2 className="">MyWeather App 2023</h2>
  <h3 className="pb-0">Lorem ipsum</h3>

   {/* <img id="banner-mob" src="../images/banner-mob.jpg" alt="Weather App"> */}
</div>
                   

</>                    
)};

export default Header;