import BookingCard from "../components/BookingCard/BookingCard";
import Navbar from "../components/Navbar/Navbar";
import useBookingsApi from "../hooks/useBookingsApi";
import { useNavigate } from "react-router";
import useTabTitle from "../hooks/useTabTitle";

const MyBookings = () => {
    const navigate = useNavigate();
    const { bookings, equipment, isLoading } = useBookingsApi(true);

    useTabTitle('My Bookings | Gym');
    return <>
        <Navbar />
        <h1 className="pageTitle">my bookings</h1>
        <div className="bookings-container">

            {isLoading ? (
                <div className="spinner"></div>
            ) : bookings.length === 0 ? (
                <div className="no-bookings-container">
                    <span className="info-message">You have no active bookings</span>
                    <p>Choose an equipment</p>
                    <button onClick={() => { navigate('/#equipment') }} >Equipments</button>
                </div>
            ) : (
                bookings.map((booking) => {
                    return <BookingCard equipment={equipment} booking={booking} key={booking.id} />

                }))
            }

        </div>
    </>
}

export default MyBookings;