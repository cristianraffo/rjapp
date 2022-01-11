import './NavBar.css';

function NavBar() {
    return (
        <nav class="navbar fixed-top navbar-expand-lg">
            <div class="navbar-logo-container">
                <a class="navbar-logo" href="./">CRISTIAN RAFFO</a>
                <div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            <div class="collapse navbar-collapse flex-grow-1 text-center justify-content-center" id="navbarCollapse">
                <ul class="navbar-nav">
                    <li class="navbar-item"><a class="navbar-link" href="#first-project">New Arrivals</a></li>                    
                    <li class="navbar-item"><a class="navbar-link" href="about.html">Stores</a></li>
                    <li class="navbar-item"><a class="navbar-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;