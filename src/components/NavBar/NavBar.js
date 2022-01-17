import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.js';


const NavBar = () => {
    return <>
        <nav className="navbar fixed-top navbar-expand-lg">
            <div className="navbar-logo-container">
                <a className="navbar-logo" href="./">CRISTIAN RAFFO</a>
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            <div className="collapse navbar-collapse flex-grow-1 text-center justify-content-center" id="navbarCollapse">
                <ul className="navbar-nav">
                    <li className="navbar-item"><a className="navbar-link" href="#first-project">New Arrivals</a></li>
                    <li className="navbar-item"><a className="navbar-link" href="about.html">Stores</a></li>
                    <li className="navbar-item"><a className="navbar-link" href="#contact">Contact</a></li>                
                </ul>
                <CartWidget /> 
            </div>
        </nav>
    </>
}

export default NavBar;