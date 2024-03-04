import './Footer.css';
import logo from '../../assets/Logo.svg';

function Footer(){

return(
    <footer className="footer">
        <img src={logo} alt="Logo" className='logo' />
        <p>&copy; {new Date().getFullYear()} Kasa. All rights reserved</p>
    </footer>
);
    }


export default Footer