interface AuthContext {
    token: string | null,
    setToken: (token: string|null) => void,
    username: string | null,
    setUsername: (username:string|null) => void, 
    isAuth: boolean, 
    setIsAuth: (bool:boolean) => void,
}