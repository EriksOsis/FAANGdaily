import React from "react";
import './PageTitle.css';

export function PageTitle(props) {
    return (
        <header className={'page-title'}>
            {props.h1}
            {props.p}
        </header>
    )
}