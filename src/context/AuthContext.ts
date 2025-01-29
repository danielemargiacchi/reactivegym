import { createContext } from "react";

// creating AuthContext
const AuthContext = createContext<AuthContext>({
    token: null,
    setToken: ()=>{},
    username: null,
    setUsername:() => {}, 
    isAuth: false, 
    setIsAuth: () => {},
});

export default AuthContext;
