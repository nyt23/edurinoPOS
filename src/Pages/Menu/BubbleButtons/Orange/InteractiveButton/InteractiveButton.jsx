
import './InteractiveButton.css';
import { useLocation } from "wouter";

const InteractiveButton = () => {
    const [, setLocation] = useLocation();
    function handleClick() {
        console.log('Interactive clicked');
        setLocation('/menu/interactive');
    }

    return (
        <button className={'interactive-button'} onClick={handleClick}>{'Interaktives'}<br/>{'und adaptives'}<br/>{'Lernen'}</button>
    )
}

export default InteractiveButton;