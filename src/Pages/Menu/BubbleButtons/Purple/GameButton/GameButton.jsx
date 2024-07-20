
import './GameButton.css';
import { useLocation } from "wouter";

const GameButton = () => {
    const [, setLocation] = useLocation();

    function handleClick() {
        console.log('Game clicked');
        const button = document.querySelector('.game-button');
        button.classList.add('game-button-grow');

        setTimeout(() => {
            setLocation('/menu/game');
        }, 150);
    }

    return (
        <button className={'game-button'} onClick={handleClick}>
            <span>{'Spielbasierter'}<br/>{'Ansatz macht'}<br/>{'das Lernen zum'}<br/>{'Spaß'}</span>
        </button>
    );
}

export default GameButton;