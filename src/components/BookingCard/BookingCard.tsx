import { PropsBookingCard } from '../../types/PropsModal';
import './BookingCard.css';

const BookingCard = ({booking}: PropsBookingCard) => {
    const startDateString: string = booking.start_date;  // booking start date
    const endDateString: string = booking.end_date;     // booking end date
    const startDateObject: Date = new Date(startDateString);    // start date object
    const endDateObject: Date = new Date(endDateString);      // end date object

    
    return <>
    <div className='booking-card' style={{backgroundImage: `url(${booking.equipment?.image})`}} >
        <div className="booking-card-info">
            <h3>{booking.equipment?.name}</h3>
        </div>
        <div className="booking-card-booking">

    <div className='start-date'><span className='begin' >Begin</span> {startDateObject.toDateString()} <span className='time' >{startDateObject.getHours()}:{startDateObject.getMinutes() < 10 ? `0${startDateObject.getMinutes()}` : startDateObject.getMinutes() } </span></div>
    <div className='end-date'><span className='expire' >Expire</span> {endDateObject.toDateString()} <span  className='time'>{endDateObject.getHours()}:{endDateObject.getMinutes() < 10 ? `0${endDateObject.getMinutes()}` : endDateObject.getMinutes() }</span></div>
        </div>
    </div>
    </>
}

export default BookingCard;