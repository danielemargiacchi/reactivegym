import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAuthApi from "./useAuthApi";
import AuthContext from "../context/AuthContext";

const useAuthentication = (buttonText: string, endpoint: string) => {
    const isLogin: boolean = buttonText === 'Login' ? true : false; 
    const navigate = useNavigate();

    const [password, setPassword] = useState('');  // password
    const [pwdVisible, setPwdVisible] = useState<boolean>(false);  // eye open/close to show passwor
    const [samePassword, setSamePassword] = useState<boolean>(true);    // boolean to check password match

    const { doAuth, error, message, isUserCreated } = useAuthApi();

    const { isAuth, username, setUsername } = useContext(AuthContext);

    // function to check password match
    const checkSamePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === password) {
            setSamePassword(true);
        } else {
            setSamePassword(false)
        }
    }

    // function to handle authentication submit
    const submitAuth = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const body = {
            username: username as string,
            password: password
        }
        setUsername(username);
        if (samePassword && username!== '') {
            doAuth(body, endpoint);
        }
    }
    // function to handle username input
    const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }
    // function to handle password input
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    
    // function to toggle password visibility
    const togglePasswordVisibility = () => {
        setPwdVisible(!pwdVisible);
    }


    useEffect(() => {
        if (isAuth && endpoint === 'login') {
            // if user is logged in successfully
            navigate(`/account/${username}`);
        }
        if (isUserCreated && endpoint === 'register') {
            // if user is created successfully
            navigate('/login/firstaccess')
        }

    }, [isAuth, navigate, endpoint, username, isUserCreated]);


    return {
        handleChangePassword,
        handleChangeUsername,
        pwdVisible,
        togglePasswordVisibility,
        isLogin,
        checkSamePassword,
        samePassword,
        submitAuth,
        message,
        error

    }
}

export default useAuthentication;