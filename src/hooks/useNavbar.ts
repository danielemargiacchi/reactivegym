import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router";

const useNavbar = () => {
    const navigate = useNavigate();

    const {isAuth, setIsAuth, setToken, username} = useContext(AuthContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);  // boolean to manage responsive menu

    // function to handle user logout
    const handleLogout = () => {
        setToken(null);
        setIsAuth(false);
        navigate('/');
    }
    // function to handle navigation
    const handleNavigation = (path: string) =>{
        setIsMenuOpen(false);
        navigate(`/${path}`);
    }

    // function to toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
   
    return {
        isAuth,
        username,
        handleLogout,
        handleNavigation,
        toggleMenu,
        isMenuOpen
    }
}

export default useNavbar;

