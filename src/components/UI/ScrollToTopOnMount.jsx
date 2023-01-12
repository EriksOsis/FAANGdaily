import {useLocation} from "react-router-dom";
import {useEffect} from "react";

//component to make links scroll to the top of the page on click
export function ScrollToTopOnMount() {
    let location = useLocation();

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [location]);

    return null;
}