import {useCallback, useState} from "react";

export default function useFetchCallbackWithMethod(url, method) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    
    const fetchData = useCallback(async (body = null) => {
        setLoading(true);
        let response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        if(response.ok) {
            if(method === 'GET'){
                setData(await response.json());
            }
            setLoading(false);
        } else {
            setError(`Error: ${response.statusText}`);
            setLoading(false);
        }
    }, [method, url])
    
    return {data,loading,error,fetchData};
}