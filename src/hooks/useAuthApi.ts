import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import authApi from "../services/auth.api";

const useAuthApi = () => {
    const [error, setError] = useState<boolean>(false);  // error true or false
    const [message, setMessage] = useState<string>('');  // info message
    const [isUserCreated, setIsUserCreated] = useState<boolean>(false);  // boolean to manage if the user is created

    const { setToken, setIsAuth} = useContext(AuthContext);

    const doAuth = async (authBody: AuthenticationBody, endpoint: string) => {
        try {
            const {response, result} = await authApi(authBody, endpoint)                                          
            // check the response status
            if (response.status === 200) {
                // account logged
                    setIsAuth(true);
                    setMessage('User authenticated successfully');
                    setToken(JSON.parse(result).token);
            }else if(response.status === 201){
                // account created
                    setMessage('User created successfully');
                    setIsUserCreated(true);
            }else if(response.status === 400){
                // error during account creation
                setError(true);
                throw new Error('User already exists');
            }else if(response.status === 401){
                // error during account login
                setError(true);
                throw new Error('User unauthorized, invalid credentials');
            }else if(response.status === 500){
                // server error
                setError(true);
                throw new Error('Server error');
            }

        } catch (error) {
            setIsAuth(false);
            setMessage((error as Error).message);
        }
        
    }

    return { doAuth, error, message, isUserCreated }

}

export default useAuthApi;