import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.js';
import { Link } from 'react-router-dom'


const NavBar = () => {
    return <>
        <nav className="navbar fixed-top navbar-expand-lg">
            <div className="navbar-logo-container">
                <Link className="navbar-logo" to="./">CRISTIAN RAFFO</Link>
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            <div className="collapse navbar-collapse flex-grow-1 text-center justify-content-center" id="navbarCollapse">
                <ul className="navbar-nav">
                    <Link className="navbar-item navbar-link" to="/">Home</Link>
                    <Link className="navbar-item navbar-link" to="/products">Products</Link>
                    <Link className="navbar-item navbar-link" to="/contact">Contact</Link>                
                </ul>
                <CartWidget /> 
            </div>
        </nav>
    </>
}

export default NavBar;