import { useContext, useEffect, useState } from "react"
import equipmentListApi from "../services/equipmentList.api";
import bookingsListApi from "../services/bookingsList.api";
import AuthContext from "../context/AuthContext";



const useBookingsApi = (isMyBooking: boolean) => {
    const [isLoading, setIsLoading] = useState(false);      // isLoading true or false
    const [error, setError] = useState<string | null>(null);    // error message

    const [bookingsDetailed, setBookingsDetailed] = useState<BookingWithEquipment[]>();

    const { token } = useContext(AuthContext);


    useEffect(() => {
        const fetchBookingsWithDetails = async () => {
            // set the headers based on the token availability
            const headers: Header = isMyBooking && token ? {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            } : {
                'Content-Type': 'application/json',
            };
            try {
                setIsLoading(true);
                const bookingData = await bookingsListApi(headers)

                const equipmentData = await equipmentListApi()

                const mix: BookingWithEquipment[] = bookingData.map((booking: EquipmentBooking) => {
                    const eq = equipmentData.find((eq: Equipment) => eq.id === booking.equipment_id);
                    return { ...booking, equipment: eq };
                });
                setBookingsDetailed(mix);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setError((error as Error).message);
            }
        }

        fetchBookingsWithDetails();

    }, [isMyBooking, token])

    return { bookingsDetailed, isLoading, error }
}


export default useBookingsApi;