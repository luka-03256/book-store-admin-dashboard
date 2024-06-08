import {useEffect, useState} from "react";

export default function useFetch(url) {
    const[data, setData] = useState({});
    const[loading, setLoading] = useState(true);
    const[error,setError] = useState({});

    useEffect(() => {
        fetch(url)
            .then(response => {
                if(response.ok) {
                    return response.json();
                } else {
                    throw response;
                }
            })
            .then(responseJSON=>setData(responseJSON))
            .catch(resultErr=>setError(resultErr))
            .finally(() => setLoading(false));
    }, []);

    return {data, loading, error};
}