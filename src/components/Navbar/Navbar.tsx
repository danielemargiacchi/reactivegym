import { NavLink } from "react-router"
import './Navbar.css';
import useNavbar from "../../hooks/useNavbar";

const Navbar = () => {
    const { isAuth, username, handleLogout, handleNavigation, toggleMenu, isMenuOpen } = useNavbar();

    return (
        <nav className="navbar">
            <span className="navbar-logo" onClick={() => handleNavigation('')}>
                <img src="/icon.svg" alt="Logo" className="logo" width="35px" />
            </span>
            <button className="menu-toggle" onClick={toggleMenu}>
                {isMenuOpen ? (
                    <svg width="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#ffffff"></path></g></svg>
                ) : (

                    <svg width="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M7 12H17M9 18H15" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                )}
            </button>
            <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
                <li className='navbar-item'>
                    <NavLink to='/' onClick={toggleMenu}>Home</NavLink>
                </li>
                <li className='navbar-item'>
                    <NavLink to='/bookings' onClick={toggleMenu}>Bookings</NavLink>
                </li>

                {!isAuth && (
                    <>
                        <li className='navbar-item'>
                            <NavLink to='/login' onClick={toggleMenu}>Login</NavLink>
                        </li>
                        <li className='navbar-item'>
                            <NavLink to='/registration' onClick={toggleMenu}>Registration</NavLink>
                        </li>
                    </>
                )}
                {isAuth && (
                    <>
                        <li className='navbar-item'>
                            <NavLink to={`/account/${username}/bookings`} end onClick={toggleMenu}>My bookings</NavLink>
                        </li>
                        <li className='navbar-item'>
                            <NavLink to={`/account/${username}`} end onClick={toggleMenu}>Account</NavLink>
                        </li>
                        <li className="navbar-item logout-item" onClick={handleLogout}>Logout</li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;