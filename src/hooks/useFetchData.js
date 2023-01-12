import {useEffect, useState} from "react";

export function useFetchData(api, setData, deps) {
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setDataLoaded(true);
            })
            .catch(error => {
                return <p>{error}</p>;
            });
    }, [api, deps, setData]);

    return dataLoaded;
}