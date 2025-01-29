import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import equipmentBookApi from "../services/equipmentBook.api";


const useBookApi = () => {
    const [data, setData] = useState<string | undefined>();  // response data
    const [message, setMessage] = useState<string>();   // info message
    const { token } = useContext(AuthContext);

    const postDataFetch = async (id: number, requestBody: RequestBody) => {
        // set the headers based on the token availability
        const headers: Header = token ? {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        } : {
            'Content-Type': 'application/json',
        };

        try {
            const { result, response } = await equipmentBookApi(id, requestBody, headers)

            setData(result);
            // check response status
            if (response.status === 200) {
                setMessage('Equipment booked successfully');
            } else if (response.status === 400) {
                throw new Error('Request not valid');
            } else if (response.status === 401) {
                throw new Error('User unauthorized');
            } else if (response.status === 403) {
                throw new Error('Equipment not available');
            } else if (response.status === 404) {
                throw new Error('Equipment not found');
            } else if (response.status === 409) {
                throw new Error('Equipment already booked');
            }
        } catch (error) {
            setMessage((error as Error).message);
        }
    }

    return { postDataFetch, data, message }
}


export default useBookApi;