import React, {useState} from "react";
import {NewsList} from "../NewsPage/NewsList";
import {useParams} from "react-router-dom";
import {PageTitle} from "../UI/PageTitle";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import {useFetchData} from "../../hooks/useFetchData";
import CircularProgress from '@mui/material/CircularProgress';


export function CompanyNews() {
    const [articles, setArticles] = useState([]);
    const params = useParams();
    const dataLoaded = useFetchData(`https://finnhub.io/api/v1/company-news?symbol=${params.symbol}&from=2023-01-01&to=2023-01-08&token=c83cnhiad3ift3bm6ue0`, setArticles);

    return (
        <div>
            <PageTitle h1={<h1>Market News <NewspaperIcon fontSize={"large"}/></h1>}
                       p={<p>Most relevant {params.symbol} news</p>}/>
            {!dataLoaded ? <CircularProgress/> : <NewsList articles={articles}/>}
        </div>
    )
}