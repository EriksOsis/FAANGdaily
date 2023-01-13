import React from 'react';
import './NewsList.css';

export function NewsList(props) {
    const {articles} = props;

    return (
        <div className={'newslist-container'}>
            <ul className={'article-list'}>
                {articles.map(article => (
                    article.source !== 'Bloomberg' &&
                    <li key={article.id} className={'article-item'}>
                        <a href={article.url} className={'link-clearup'}>
                            <h1 className={'article-headline'}>{article.headline}</h1>
                            <p className={'article-datetime'}>Published: {new Date(article.datetime * 1000).toString()}</p>
                            <img src={article.image} alt={article.headline} className={'article-thumbnail'}/>
                            <article className={'article-summary'}>{article.summary}</article>
                            <p className={'article-source'}>By {article.source}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}