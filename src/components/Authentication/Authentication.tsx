import './Authentication.css';
import { Link} from 'react-router';
import useAuthentication from '../../hooks/useAuthentication';


const Authentication = ({ buttonText, endpoint }: AuthProp) => {

    const {handleChangeUsername, handleChangePassword, pwdVisible, togglePasswordVisibility, isLogin, checkSamePassword, samePassword, submitAuth, message, error} = useAuthentication(buttonText, endpoint)

    return <>
        <div className="authentication-form-container" >
            <form className="authentication-form">
                <label htmlFor="username">Username</label>
                <input onChange={(e) => {
                    handleChangeUsername(e);
                }} className='authentication-field' type="text" id="username" placeholder='username' minLength={3} />
                <label htmlFor="password">Password</label>
                <input onChange={(e) => {
                    handleChangePassword(e);
                }} className='authentication-field' type={pwdVisible ? 'text' : 'password'} id="password" placeholder='••••••••' />
                <div
                    onClick={togglePasswordVisibility}
                    className='toggle-password-visibility'
                >
                    {<img src={pwdVisible ? "/openeye.svg" : "/closeeye.svg"} alt="eye password toggle" width="25px" />}
                </div>
                {!isLogin && (<>
                    <label htmlFor="repeatPassword">Repeat password</label>
                    <input onChange={checkSamePassword} className='authentication-field' type="password" id="repeatPassword" placeholder='••••••••' />
                    {!samePassword && (
                        <p>Password doesn't match!</p>
                    )}
                </>
                )}
                <button onClick={submitAuth} className='btn-authentication' >{buttonText}</button>
            </form>
            {isLogin && (
                <p>No account? <Link to='/registration' className='auth-link'>Create one</Link> </p>
            )}
            {!isLogin && (
                <p>Already have an account? <Link to='/login' className='auth-link'>Log in</Link> </p>
            )}
            {error && (
                <div className='error-message-container' >
                <p>{message}</p>
                </div>
            )}

        </div>


    </>
}

export default Authentication;