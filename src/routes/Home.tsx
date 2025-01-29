import { useNavigate } from "react-router";
import EquipmentCard from "../components/EquipmentCard/EquipmentCard";
import Navbar from "../components/Navbar/Navbar";
import useEquipmentApi from "../hooks/useEquipmentApi";
import Hero from "../components/Hero/Hero";
import useTabTitle from "../hooks/useTabTitle";
import useScroll from "../hooks/useScroll";

const Home = () => {
  const { equipment, isLoading, error } = useEquipmentApi();
  const navigate = useNavigate();
  useTabTitle('Home | Gym');
  useScroll('#equipment');


  return <>
    <Navbar />
    <Hero />
    <section id="equipment">
      <h1 className="pageTitle">equipment list</h1>

      <div className="equipment-container">
        
        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          equipment.map((eq, index) => (
            <EquipmentCard
              key={index}
              equipment={eq}
              onClick={() => {
                navigate(`/equipment/${eq.id}`);
              }}
            />
          ))
        )}
        {error && (
          <p>{error}</p>
        )}
      </div>
    </section>
  </>
}

export default Home;