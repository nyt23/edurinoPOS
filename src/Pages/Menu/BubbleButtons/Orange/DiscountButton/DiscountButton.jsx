
import './DiscountButton.css'

import { useLocation } from "wouter";

const DiscountButton = () => {
    const [location, setLocation] = useLocation();
    function handleClick () {
        console.log('Feedback + 20% Gutschein clicked');
        const button = document.querySelector('.discount-button');
        button.classList.add('discount-button-grow');
        setTimeout(() => {
            setLocation('/menu/discount');
        }, 250);
    }

    return (
        <button className={'discount-button'} onClick={handleClick}>
            <span>{'Feedback'}<br/>{'+'}<br/>{'20%'}<br/>{'Gutschein'}</span>
        </button>
    )
}

export default DiscountButton;
