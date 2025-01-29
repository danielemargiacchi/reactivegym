import { PropsWithChildren, useState } from "react";
import AuthContext  from "./AuthContext";

// AuthContext Provider
export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState<string | null>(null);  // state to manage token
  const [username, setUsername] = useState<string | null>(null);  // state to manage username
  const [isAuth, setIsAuth] = useState(false);  // state to manage if the user is authenticated


  return (
    // giving to the provider's children the access to the context
    <AuthContext.Provider value={{ token, setToken, username, setUsername, isAuth, setIsAuth }}>  
      {children}
    </AuthContext.Provider>
  );
};