import BookingCard from "../components/BookingCard/BookingCard";
import Navbar from "../components/Navbar/Navbar";
import useBookingsApi from "../hooks/useBookingsApi";
import { useNavigate } from "react-router";
import useTabTitle from "../hooks/useTabTitle";
import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";

const MyBookings = () => {
    const navigate = useNavigate();
    const { bookingsDetailed, isLoading } = useBookingsApi(true);
    const { token } = useContext(AuthContext);

    useEffect(() => {
        if (!token) {   // check if the user is not authenticated
            navigate('/login');  // navigate to login 
        }
    }, [token, navigate])

    useTabTitle('My Bookings | Gym');
    return <>
        <Navbar />
        <h1 className="pageTitle">my bookings</h1>
        <div className="bookings-container">

            {isLoading ? (
                <div className="spinner"></div>
            ) : bookingsDetailed?.length === 0 ? (
                <div className="no-bookings-container">
                    <span className="info-message">You have no active bookings</span>
                    <p>Choose an equipment</p>
                    <button onClick={() => { navigate('/#equipment') }} >Equipments</button>
                </div>
            ) : (
                bookingsDetailed?.map((booking) => {
                    return <BookingCard booking={booking} key={booking.id} />

                }))
            }

        </div>
    </>
}

export default MyBookings;