import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../assets/logo-1.png';
import { AuthContext } from '../context/authContext';

function Navbar() {
    const [scrollY, setScrollY] = useState(0);    
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            id="navbar"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                width: "100%",
                zIndex: 1000,
                backgroundColor: scrollY > 0 ? "#3F51B5" : "transparent",
            }}
            className="p-2 d-flex justify-content-between align-items-center h-10vh"
        >
            <div className="d-flex justify-content-start">
                <Link to="/" className='mb-3'>
                    <img src={logo} className='n-img'/>
                </Link>
                <Link to='/' className="text-decoration-none m-3 text-white">
                    Home
                </Link>
                <Link to='/medicine' className="text-decoration-none m-3 text-white">
                    Medicine
                </Link>
                <Link to='/hazards' className="text-decoration-none m-3 text-white">
                    Hazards
                </Link>
                <Link to='/about' className="text-decoration-none m-3 text-white">
                    About Us
                </Link>
            </div>
            { isLoggedIn ? (
                <div className="d-flex justify-content-end">
                    <Link to='/profile' className="text-decoration-none m-3 text-white">
                        Profile
                    </Link>
                    <Link to='/login' className="text-decoration-none m-3 text-white" onClick={handleLogout}>
                        Log Out
                    </Link>
                </div>
            ):(
                <div className="d-flex justify-content-end">
                    <Link to='/login' className="text-decoration-none m-3 text-white">
                        Login
                    </Link>
                    <Link to='/register' className="text-decoration-none m-3 text-white">
                        Register
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Navbar;
