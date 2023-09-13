//import styles from './Footer.module.css';

import twitter from './../images/social/twitter.png';
import youtube from './../images/social/YouTube.png';
import instagram from './../images/social/instagram.png';

function Footer() {
  return (
<>
<footer className="pt-5 mt-5 text-start">
    <div className="container border-top">
        <div className="row pt-5 pb-4">
            <div className="col-sm-9 legal-text">
                <p>Get the latest news, tutorials, and more from MyWeather. Follow us on:</p>
            </div>
            <div className="col-lg-3 social">
                <p className="ps-auto"> 
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="social twitter pe-3"><img src={twitter} alt="Twitter" height='20' /></a> 
                    <a href="https://www.youtube.com/c" target="_blank" rel="noreferrer" className="social youtube pe-3"><img src={youtube} alt="YouTube" height='20' /></a> 
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="social instagram pe-3"><img src={instagram} alt="Instagram" height='20' /></a> 
                </p>
            </div>
        </div>
        <p>MyWeather and the MyWeather logo are either registered trademarks or trademarks of MyWeather in Canada, the United States, and/or other countries. All other trademarks are the property of their respective owners.</p>
        <p>
        &copy; <script type="text/javascript">
        document.write(new Date().getFullYear());
        </script> 
        MyWeather. All rights reserved. </p>        

    </div>
</footer> 


</>                    
)};

export default Footer;