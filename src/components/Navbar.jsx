import '../styles/Navbar.css'
import logo from '../assets/logo.png'
import { useState } from 'react'; // For managing the toggle state

function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false); // State to control the menu visibility

    // Toggle the menu when hamburger button is clicked
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return(
        <header>
            <img className='logo' src={logo} alt='logo'></img>
            <nav className='nav'>
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li><a href='../Home.jsx'>Home</a></li>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Premium</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </nav>
            <div className='srb'>
                <button className='signin-btn'>Sign in</button>
                <button className='register-btn'>Register</button>
            </div>
            {/* Hamburger icon */}
            <div className='hamburger' onClick={toggleMenu}>
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            </div>
        </header>
    );
}

export default Navbar;
