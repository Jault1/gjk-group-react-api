import { BrowserRouter as Link, } from 'react-router-dom';


function Nav () {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'home'} className="nav-link"> Home </Link></li>
            <li><Link to={'tableDaily'} className="nav-link">Daily</Link></li>
            <li><Link to={'table'} className="nav-link">Table</Link></li>
          </ul>
          </nav>
          <hr/>
        </>
    )
}
export default Nav