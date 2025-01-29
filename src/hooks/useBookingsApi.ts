import { useContext, useEffect, useState } from "react"
import equipmentListApi from "../services/equipmentList.api";
import bookingsListApi from "../services/bookingsList.api";
import AuthContext from "../context/AuthContext";



const useBookingsApi = (isMyBooking : boolean ) =>{
    const [bookings, setBookings] = useState<EquipmentBooking[]>([]);   // array of bookings
    const [equipment, setEquipment] = useState<Equipment[]>([]);    // array of equipments
    const [isLoading, setIsLoading] = useState(false);      // isLoading true or false
    const [error, setError] = useState<string|null>(null);    // error message

    const {token} = useContext(AuthContext);
    

    useEffect(()=>{
        // set the headers based on the token availability
        const headers: Header = isMyBooking && token ? {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        } : {
            'Content-Type': 'application/json',
        };
        setIsLoading(true);
        // get the bookings
        bookingsListApi(headers)
        .then(data => {
            setBookings(data);
        })
        .catch(error => {
            setError(error);
        })
        .finally(()=>{
            setIsLoading(false);
        })
        // get the equipments
        equipmentListApi()
        .then(data => {
            setEquipment(data);
        })
        .catch(error => {
            setError(error);
        })
        .finally(()=>{
            setIsLoading(false)
        })

    },[isMyBooking, token])

    return {bookings, equipment, isLoading, error}
}


export default useBookingsApi;