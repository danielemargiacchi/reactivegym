import { useEffect, useState } from "react"
import equipmentListApi from "../services/equipmentList.api";

const useEquipmentApi = () =>{
    const [equipment, setEquipment] = useState<Equipment[]>([]);  // array of equipment
    const [isLoading, setIsLoading] = useState(false);  // isLoading true or false
    const [error, setError] = useState<string | null>(null);    // error message
    useEffect(()=>{
        setIsLoading(true);
        equipmentListApi()
        .then(data => {
            setEquipment(data);
        })
        .catch((e)=>{
            setError(e);
        })
        .finally(()=>{
            setIsLoading(false);
        })
    },[])

    return {equipment, isLoading, error}
}


export default useEquipmentApi;