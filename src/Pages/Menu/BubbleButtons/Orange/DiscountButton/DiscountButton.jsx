
import './DiscountButton.css'

import { useLocation } from "wouter";

const DiscountButton = () => {
    const [location, setLocation] = useLocation();
    function handleClick () {
        console.log('Feedback + 20% Gutschein clicked');
        setLocation('/menu/discount');
    }

    return (
        <button className={'discount-button'} onClick={handleClick}>{'Feedback'}<br/>{'+'}<br/>{'20%'}<br/>{'Gutschein'}</button>
    )
}

export default DiscountButton;
