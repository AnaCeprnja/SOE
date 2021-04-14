import React, { useState } from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">EXPLORE<i className="fab fa-typo3" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menue active' : 'nav-menue'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/blog' className='nav-links' onClick={closeMobileMenu}> Blog </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/adventure' className='nav-links' onClick={closeMobileMenu}>Adventure</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/getwild' className='nav-links' onClick={closeMobileMenu}>Get Wild</Link>

                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
                        </li>
                    </ul>
                </div>


            </nav>
        </>
    )
}

export default Navbar

