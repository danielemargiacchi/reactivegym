import { GYM_API_BASE_URL } from "../constants";


const equipmentBookApi = async (id: number, requestBody: RequestBody, headers: Header) => {
    const response = await fetch(`${GYM_API_BASE_URL}/equipment/${id}/book`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestBody)
    })

    const result = await response.text();
    return { response, result }
}

export default equipmentBookApi;