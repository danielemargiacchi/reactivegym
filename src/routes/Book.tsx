import { useParams } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import useEquipmentApi from "../hooks/useEquipmentApi";
import { useEffect, useState } from "react";
import Modal from "../components/Modal/Modal";
import useTabTitle from "../hooks/useTabTitle";


const Book = () => {
    const { equipment, isLoading } = useEquipmentApi();
    const id = useParams().id;
    const [time, setTime] = useState(5)
    const [selectedEquipment, setSelectedEquipment] = useState<Equipment>();
    const [buttonSelected, setButtonSelected] = useState<number>(5);

    useTabTitle(`Book ${selectedEquipment?.name} | Gym`)

    const totPrice = selectedEquipment?.pricePerMinute ? selectedEquipment?.pricePerMinute * time : 0;


    useEffect(() => {
        const eq = equipment.filter((eq) => {
            return eq.id === Number(id);
        });
        setSelectedEquipment(eq.pop());
    }, [equipment, id]);

    return <>
        <Navbar />
        <div className="booking-container">
            {isLoading ? (
                <div className="spinner"></div>
            ) : (<>
                <div className="equipment-detail">
                    <div className="equipment-hero-image">
                        <img src={selectedEquipment?.image} alt={selectedEquipment?.name} />
                    </div>
                    <div className="equipment-spec-book">
                        <h1 className="pageTitle" > Book <span className="lowercase">{selectedEquipment?.name}</span></h1>

                        <div className="btn-time-container" >
                            <button className={buttonSelected === 5 ? 'btn-time-selected' : 'btn-time'} onClick={() => {
                                setButtonSelected(5)
                                setTime(5)
                            }}>5 min.</button>
                            <button className={buttonSelected === 10 ? 'btn-time-selected' : 'btn-time'} onClick={() => {
                                setButtonSelected(10)
                                setTime(10)
                            }}>10 min.</button>
                            <button className={buttonSelected === 15 ? 'btn-time-selected' : 'btn-time'} onClick={() => {
                                setButtonSelected(15)
                                setTime(15)
                            }}>15 min.</button>
                            <button className={buttonSelected === 20 ? 'btn-time-selected' : 'btn-time'} onClick={() => {
                                setButtonSelected(20)
                                setTime(20)
                            }}>20 min.</button>
                        </div>
                        <h3>TIME : <span id="timeMinutes" > {time} MINUTES</span></h3>
                        <h3>PRICE: {selectedEquipment?.pricePerMinute} €/min.</h3>
                        <h3>TOTAL: <span id="totPrice"> {totPrice.toFixed(2)}€</span></h3>
                        <Modal time={time} equipmentId={Number(id)} equipmentName={selectedEquipment?.name} price={selectedEquipment?.pricePerMinute} />
                    </div>
                </div>

            </>
            )
            }
        </div>


    </>
}

export default Book;