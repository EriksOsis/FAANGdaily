import React, {useEffect, useState} from "react";
import './TrendsPage.css';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import {Trends} from "./Trends";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {PageTitle} from "../UI/PageTitle";
import CircularProgress from '@mui/material/CircularProgress';
import {useFetchData} from "../../hooks/useFetchData";

export const TrendsPage = () => {
    const [submitted, setSubmitted] = useState(true);
    const [symbol, setSymbol] = useState('AAPL');
    const [trends, setTrends] = useState([]);
    const [textField, setTextField] = useState(null);

    const dataLoaded = useFetchData(`https://finnhub.io/api/v1/stock/recommendation?symbol=${symbol}&token=c83cnhiad3ift3bm6ue0`, setTrends, symbol);

    useEffect(() => {
            if (!symbol || trends.length === 0) {
                setTextField(<TextField sx={{
                    '& .MuiFormLabel-root': {
                        color: '#d1d4dc',
                    }
                }} id="filled-basic" label="Company Symbol"
                                        variant="filled" onChange={changeHandler}
                                        value={symbol} error helperText={"Incorrect company symbol"}/>);
            } else {
                setTextField(<TextField sx={{
                    '& .MuiFormLabel-root': {
                        color: '#d1d4dc',
                    }
                }} id="filled-basic" label="Company Symbol" variant="filled" onChange={changeHandler}
                                        value={symbol}/>);
            }
        },
        [symbol, trends.length]
    )
    ;

    function submitHandler(event) {
        event.preventDefault();
        setSubmitted(true);
    }

    function changeHandler(event) {
        setSymbol(event.target.value);

        if (symbol.length < 0) {
            setSubmitted(false);
        }
    }

    return (
        <div className={'trend-page'}>
            <PageTitle h1={<h1>Trends <WhatshotOutlinedIcon fontSize={"large"}/></h1>}
                       p={<p>Get latest analyst recommendation trends for a company</p>}/>
            <div>
                {!dataLoaded ? <CircularProgress/> :
                    <div className={'trend-content'}>
                        <p className={'label'}>Type in company`s symbol to check what market analysts suggest
                            for the
                            current period.</p>
                        <form className={'trend-form'} onSubmit={submitHandler}>
                            {textField}
                            <Button className={'form-button'} variant={"contained"}
                                    type={"submit"}>Check</Button>
                        </form>
                        <div>
                            <h1>{!symbol ? 0 : symbol} trend results</h1>
                            {submitted && <Trends trends={trends}/>}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}