import React, {useEffect, useState} from "react";
import {NewsList} from "../NewsPage/NewsList";
import {useParams} from "react-router-dom";
import {PageTitle} from "../UI/PageTitle";
import NewspaperIcon from "@mui/icons-material/Newspaper";

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
            <PageTitle h1={<h1>Market News <NewspaperIcon fontSize={"large"}/></h1>}
                       p={<p>Most relevant {params.symbol} news</p>}/>
            <NewsList articles={articles}/>
        </div>
    )
}