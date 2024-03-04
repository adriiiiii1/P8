import './Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.svg';


function Header(){

return(
    <>
    <header className="header">
                <div className="logo-container">
                <img src={logo} alt="Logo" />
                </div>
                <div className="lien-nav">       
                    <div>    
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Accueil</NavLink>
                    <NavLink to="/apropos"className={({ isActive }) => (isActive ? 'active' : '')}>A Propos</NavLink>
                    </div>
                </div>
    </header></>
);
    }


export default Header