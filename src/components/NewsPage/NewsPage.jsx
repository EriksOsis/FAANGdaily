import React, {useState} from 'react';
import {NewsList} from './NewsList';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import {PageTitle} from "../UI/PageTitle";
import CircularProgress from '@mui/material/CircularProgress';
import {useFetchData} from "../../hooks/useFetchData";

export function NewsPage() {
    const [articles, setArticles] = useState([]);
    const dataLoaded = useFetchData(`https://finnhub.io/api/v1/news?category=general&token=c83cnhiad3ift3bm6ue0`, setArticles);

    return (
        <div>
            <PageTitle h1={<h1>Market News <NewspaperIcon fontSize={"large"}/></h1>}
                       p={<p>Daily market news without the fluff.</p>}/>
            {!dataLoaded ? <CircularProgress/> : <NewsList articles={articles}/>}
        </div>
    )
        ;
}