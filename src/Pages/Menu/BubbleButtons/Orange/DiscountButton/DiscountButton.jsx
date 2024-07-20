
import './DiscountButton.css'

import { useLocation } from "wouter";
import {useEffect} from "react";

const DiscountButton = () => {
    const [, setLocation] = useLocation();

    // const [clickedBubble, setClickedBubble] = useState(localStorage.getItem('clickedBubble'));
    // const [clickedBubble, setClickedBubble] = useState(() => {
    //     const storedBubble = localStorage.getItem('clickedBubble');
    //     console.log(`Retrieved from localStorage: ${storedBubble}`);
    //     return storedBubble || 'defaultBubble';
    // });

    // useEffect(() => {
    //     if (!localStorage.getItem('clickedBubble')) {
    //         localStorage.setItem('clickedBubble', 'defaultBubble');
    //     }
    // }, []);

    function handleClick () {
        console.log('Feedback + 20% Gutschein clicked');
        // setClickedBubble(bubbleId);
        const button = document.querySelector('.discount-button');
        button.classList.add('discount-button-grow');

        setTimeout(() => {
            setLocation('/menu/feedback');
        }, 150);

        // setTimeout(() => {
        //     setClickedBubble(bubbleId);
        //     localStorage.setItem('clickedBubble', bubbleId);
        //     console.log(`Stored in localStorage: ${localStorage.getItem('clickedBubble')}`);
        // }, 3000)
    }



    return (
        <button className={'discount-button'}
                onClick={() => handleClick()}>
            <span>{'Feedback'}<br/>{'+'}<br/>{'20%'}<br/>{'Gutschein'}</span>
        </button>
    )
}

export default DiscountButton;
