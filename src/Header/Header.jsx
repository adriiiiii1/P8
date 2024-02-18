import './Header.css';
import { Link } from 'react-router-dom'
function Header(){

return(
    <header className="header">
                <div className="logo-container">
                <a href="index.html" className="lien-icone">KASA
                </a>
                </div>
                <div className="lien-nav">       
                    <div>    
                    <Link to="/">Accueil</Link>
                    <Link to="/apropos">A Propos</Link>

                    </div>
                </div>
    </header>
);
    }


export default Header