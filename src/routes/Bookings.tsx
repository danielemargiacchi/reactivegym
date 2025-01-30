import BookingCard from "../components/BookingCard/BookingCard";
import Navbar from "../components/Navbar/Navbar";
import useBookingsApi from "../hooks/useBookingsApi";
import { useNavigate } from "react-router";
import useTabTitle from "../hooks/useTabTitle";

const Bookings = () => {
    const navigate = useNavigate();
    const { bookingsDetailed, isLoading, error } = useBookingsApi(false);

    useTabTitle('Bookings | Gym');
    return <>
        <Navbar />
        <h1 className="pageTitle">bookings</h1>
        <div className="bookings-container">

            {isLoading ? (
                <div className="spinner"></div>
            ) : bookingsDetailed?.length === 0 ? (
                <div className="no-bookings-container">
                    <span className="info-message">There are no bookings active now</span>
                    <p>Are you trying to book an equipment?</p>
                    <button onClick={() => { navigate('/#equipment') }} >View equipments available</button>
                </div>
            ) : (
                bookingsDetailed?.map((booking) => {
                    return <BookingCard {...booking} key={booking.id} />

                }))
            }
            {error && (
                <p>{error}</p>
            )}
        </div>
    </>
}

export default Bookings;