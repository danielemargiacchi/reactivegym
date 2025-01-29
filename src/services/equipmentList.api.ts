import { GYM_API_BASE_URL } from "../constants"

const equipmentListApi = async () => {
    const res = await fetch(`${GYM_API_BASE_URL}/equipment`);
    const data = await res.json();
    return data;
}

export default equipmentListApi;