import { useContext } from "react";
import { Link } from "react-router";
import "./Hero.css";
import AuthContext from "../../context/AuthContext";

const Hero = () => {
    const {isAuth, username} = useContext(AuthContext);
    return <>
        <div className="hero">
            <h1><span className="highlight">React</span>ive <span className="highlight-2">Gym</span></h1>
            <p>Push Limits. Break Barriers. React More.</p>
            <div className="cta-buttons">
                {!isAuth ? (
                    <Link to="/registration">Join Us</Link>
                ) : (
                    <Link to={`/account/${username}`}>My account</Link>
                )}
                <a href="#equipment">View equipments</a>
            </div>
        </div>
    </>
}

export default Hero;