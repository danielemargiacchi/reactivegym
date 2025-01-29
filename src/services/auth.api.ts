import { GYM_API_BASE_URL } from "../constants";

const authApi = async (authBody: AuthenticationBody, endpoint: string) => {
    const response = await fetch(`${GYM_API_BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(authBody)
    })
    const result = await response.text();  

    return {response, result}
}

export default authApi;