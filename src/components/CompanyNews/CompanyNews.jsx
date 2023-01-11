import React, {useEffect, useState} from "react";
import {NewsList} from "../NewsPage/NewsList";
import {useParams} from "react-router-dom";

export function CompanyNews() {
    const [articles, setArticles] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch(`https://finnhub.io/api/v1/company-news?symbol=${params.symbol}&from=2023-01-01&to=2023-01-08&token=c83cnhiad3ift3bm6ue0`)
            .then(response => response.json())
            .then(data => {
                setArticles(data);
            })
            .catch(error => {
                return <p>{error}</p>;
            });
    }, []);

    return (
        <div>
            <NewsList articles={articles}/>
        </div>
    )
}