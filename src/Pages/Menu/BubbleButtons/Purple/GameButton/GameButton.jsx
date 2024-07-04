
import './GameButton.css';
import { useLocation } from "wouter";

const GameButton = () => {
    const [, setLocation] = useLocation();
    function handleClick() {
        console.log('Game clicked');
        setLocation('/menu/game');
    }

    return (
        <button className={'game-button'} onClick={handleClick}>{'Spielbasierter'}<br/>{'Ansatz macht'}<br/>{'das Lernen zum'}<br/>{'Spaß'}</button>
    );
}

export default GameButton;