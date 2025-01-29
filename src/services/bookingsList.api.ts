import { GYM_API_BASE_URL } from "../constants"


const bookingsListApi = async (headers: Header) => {
    const res = await fetch(`${GYM_API_BASE_URL}/equipment-bookings`,  {
        headers: headers,
    });
    const data = await res.json();
    return data;
}

export default bookingsListApi;