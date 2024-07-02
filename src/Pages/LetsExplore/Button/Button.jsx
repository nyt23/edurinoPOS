import { useLocation } from "wouter";

import './Button.css'

const Button = () => {
    const [location, setLocation] = useLocation();
    function handleClick () {
        console.log("Explore button clicked!");
        setLocation('/menu');
    }

    return (
        <button className="button" onClick={handleClick}>{"Let's"}<br/>{"Explore"}</button>
    )
}

export default Button;