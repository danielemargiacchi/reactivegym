import Navbar from "../components/Navbar/Navbar";
import Authentication from "../components/Authentication/Authentication";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useTabTitle from "../hooks/useTabTitle";

const Login = () => {
    const params = useParams();
    const [isFristAccess, setIsFirstAccess] = useState<boolean>(false);
    useTabTitle('Login | Gym');

    useEffect(() => {
        const newUs = params.firstaccess;

        if (((newUs as unknown) as string) == 'firstaccess') {
            setIsFirstAccess(true);
        }
    }, [params])

    return <>
        <Navbar />
        <div className="login-page">
            <h1 className="pageTitle">login</h1>
            <div className="auth-page-container">
                <div className="auth-page-image image-login">
                    <div className="auth-page-brand">

                        <span className="highlight">React</span>ive <span className="highlight-2">Gym</span>
                    </div>
                    <div className="auth-page-claim">Build <span className="highlight">now</span> your <span className="highlight-2">body</span></div>
                    <span>Track your progress.</span>
                </div>
                <div className="auth-page-auth">

                    {isFristAccess && (
                        <div className="success-message-container">
                        <p className="user-created-success-message">User created successfully</p>
                        </div>
                    )}
                    <Authentication endpoint="login" buttonText="Login" />
                </div>
            </div>
        </div>

    </>
}

export default Login;