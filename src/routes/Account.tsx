import { useContext, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";
import useTabTitle from "../hooks/useTabTitle";

const Account = () => {
  const navigate = useNavigate();
  const { token, username } = useContext(AuthContext);

  useTabTitle('Account | Gym')
  useEffect(() => {
    if (!token) {   // check if the user is not authenticated
      navigate('/login');  // navigate to login 
    }
  }, [token, navigate])
  return <>
    <Navbar />
    <h1 className="pageTitle" >WELCOME BACK, {username}</h1>

    <div className="profile-container">
      <div className="profile-bookings">
        <div onClick={() => { navigate('./bookings') }} className="my-bookings-btn profile-btn">
          <h3>My bookings</h3>
        </div>
        <div onClick={() => { navigate('/bookings') }} className="all-bookings-btn profile-btn">
          <h3>All bookings</h3>
        </div>
        <div onClick={() => { navigate('/#equipment') }} className="all-equipment-btn profile-btn">
          <h3>View equipment</h3>
        </div>
      </div>
    </div>


  </>
}


export default Account;

