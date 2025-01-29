import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate, useParams } from "react-router";
import useEquipmentApi from "../hooks/useEquipmentApi";
import useTabTitle from "../hooks/useTabTitle";
import Review from "../components/Review/Review";

const Equipment = () => {
    const { equipment, isLoading, error } = useEquipmentApi();
    const id = useParams().id;  // id to get the selected equipment
    const [selectedEquipment, setSelectedEquipment] = useState<Equipment>();  // the selected equipment
    const navigate = useNavigate();

    useTabTitle(`${selectedEquipment?.name} | Gym`)

    useEffect(() => {
        // filter the selected equipment from the equipment array
        const eq = equipment.filter((eq) => {
            return eq.id === Number(id);
        });
        setSelectedEquipment(eq.pop());
    }, [equipment, id, selectedEquipment]);

    return <>
        <Navbar />
        <div className="booking-container">
            {isLoading ? (
                <div className="spinner"></div>
            ) : (<>
                <div className="equipment-detail" >
                    <div className="equipment-hero-image">
                        <img src={selectedEquipment?.image} alt={selectedEquipment?.name} />
                    </div>
                    <div className="equipment-spec">
                        <h1 className="pageTitle lowercase" >{selectedEquipment?.name}</h1>
                        <span>{selectedEquipment?.claim}</span>
                        <h3>Price: {selectedEquipment?.pricePerMinute} €/min.</h3>
                        <div className="equipment-reviews">
                            <Review stars={5} heading='Nice!' text='"Sturdy, durable, and designed for both beginners and advanced users. It’s made my workouts so much more efficient and enjoyable. "'></Review>
                            <Review stars={4} heading='Excellent' text='"This gym equipment is perfect for every fitness level. It’s versatile, reliable, and built to last. Great value for the price and makes working out feel like a breeze!"'></Review>
                            <Review stars={5} heading='Nice!' text={`"They're easy to use, incredibly durable, and make a huge difference in my workouts. Definitely a great addition to any fitness routine!"`}></Review>
                        </div>
                        <div className="btn-controls">
                            <button className="btn-back" onClick={() => { navigate(`/#equipment`) }}>Back to equipments</button>
                            <button onClick={() => { navigate(`/equipment/${id}/book`) }} >Go to book</button>
                        </div>
                    </div>
                </div>
            </>
            )
            }
            {error && (
                <p>{error}</p>
            )}
        </div>


    </>
}

export default Equipment;