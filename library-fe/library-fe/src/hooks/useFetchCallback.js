import {useCallback, useEffect, useState} from "react";

export default function useFetchCallback(url) {
    const [data,setData] = useState({});
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState();

    const fetchData = useCallback(async () => {
        setLoading(true);
        let response = await fetch(url);
        if(response.ok) {
            setData(await response.json());
            setLoading(false);
        } else {
            setError(`Error: ${response.statusText}`);
            setLoading(false);
        }
    }, [url])

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return {data,loading,error,fetchData};
}