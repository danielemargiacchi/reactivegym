import { PropsModal } from '../../types/PropsModal';
import './Modal.css';
import useModal from '../../hooks/useModal';



const Modal = ({ time, equipmentId, equipmentName, price }: PropsModal) => {
    const totalPrice = (price! * time).toFixed(2);  // total price
    const { toggleModal, handleBook, isBooked, message, modal, navigate } = useModal(time, equipmentId);

    return <>
        <div className='actions-modal-btn' >
            <button className="btn-modal-back" onClick={() => { navigate(`/equipment/${equipmentId}`) }} >Back</button>
            <button className="btn-modal" onClick={toggleModal} >Book</button>
        </div>

        {modal && (
            <div className="modal">
                <div className="overlay">
                    <div className="modal-content">
                        <h2>BOOKING CONFIRM</h2>
                        <p>Are you sure you want to book <strong>{equipmentName}</strong> for <span className='highlight'>{time} minutes</span>?</p>
                        <p>Total price: {totalPrice} €</p>
                        <div className="actions-btn">
                            <button onClick={handleBook} className='confirm-btn'>{isBooked ? 'View all bookings' : 'Confirm'}</button>
                            <button onClick={toggleModal} className='close-modal'>Back</button>
                        </div>
                        {message && (
                            <p className='success-message'>{message}!</p>
                        )}
                    </div>
                </div>
            </div>
        )}




    </>
}

export default Modal;