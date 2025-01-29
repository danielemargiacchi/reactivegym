import { useState } from "react";
import useBookApi from "./useBookApi";
import { useNavigate } from "react-router";

const useModal = (time: number, equipmentId: number) => {
    const [modal, setModal] = useState(false);  // modal open true or false
    const { postDataFetch, message } = useBookApi();
    const [isBooked, setIsBooked] = useState(false);  // to disable/change the button
    const navigate = useNavigate();

    const toggleModal = () => {
        setModal(!modal);
    }

    const handleBook = () => {
        // if not already booked then book
        if (!isBooked) { 
            const requestBody = {
                duration: time
            };
            postDataFetch(equipmentId, requestBody);
            setIsBooked(true);
        } else {  
            // already booked, button change to all bookings
            navigate('/bookings');
        }
    };


    return {
        toggleModal,
        handleBook,
        isBooked,
        message,
        modal,
        navigate
    }
}

export default useModal;