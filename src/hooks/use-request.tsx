import React, { useState } from 'react';
import axios from 'axios';

interface ApiResponse {
    "page": number,
    "data": {
        "results": any[]
    }
}

export default (url: string) => {
    console.log(url)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const doRequest = async () => {
        try {
            setLoading(true);
            const response: ApiResponse = await axios.get(url);
            console.log('response', response)
            setLoading(false);
            return response?.data?.results ?? [];
        } catch (e: any) {
            setError(e);
        }
    }

    return { doRequest, loading, error };

}
