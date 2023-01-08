import React, {useState, useEffect} from 'react';
import {NewsList} from './NewsList';
import './NewsPage.css';
import NewspaperIcon from '@mui/icons-material/Newspaper';

export function NewsPage() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(`https://finnhub.io/api/v1/news?category=general&token=c83cnhiad3ift3bm6ue0`)
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
            <header className={'page-title'}>
                <h1>Market News <NewspaperIcon fontSize={"large"}/></h1>
            </header>
            <NewsList articles={articles}/>
        </div>
    );
}