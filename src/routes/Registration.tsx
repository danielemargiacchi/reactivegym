import Authentication from "../components/Authentication/Authentication";
import Navbar from "../components/Navbar/Navbar";
import useTabTitle from "../hooks/useTabTitle";

const Registration = () => {
    useTabTitle('Registration | Gym');
    return <>
        <Navbar />
        <h1 className="pageTitle">registration</h1>
        <div className="auth-page-container">
            <div className="auth-page-image image-registration">
                <div className="auth-page-brand">

                    <span className="highlight">React</span>ive <span className="highlight-2">Gym</span>
                </div>
                <div className="auth-page-claim">Join <span className="highlight">us</span></div>
                <span>Your journey starts here.</span>
            </div>
            <div className="auth-page-auth">
                <Authentication endpoint="register" buttonText="Sign up" />
            </div>
        </div>
    </>
}

export default Registration;