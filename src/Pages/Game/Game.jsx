
import './Game.css';

import { useLocation } from "wouter";
import {useState} from "react";
import PurplePageBg from "../../Media/Pictures/PageBg/PurplePageBg/PurplePageBg.jsx";
import LogoSub from "../../Media/Pictures/LogoSub/LogoSub.jsx";

const Game = () => {
    const [, setLocation] = useLocation();
    const [isClicked, setIsClicked] = useState(false);

    function handleGoBack () {
        setIsClicked(true);
        setTimeout(() => {
            setLocation('/menu');
            console.log('Go back to menu');
        }, 300)
    }

    return (
        <div className={`whole-begin-page ${isClicked ? 'whole-game-page-animation' : ''}`}>
            <div className={'game-page'}>

            </div>

            <div>
                <PurplePageBg />
                <LogoSub />
            </div>


            <button className={'game-title-button'} onClick={handleGoBack}>Spielbasierter<br/>Ansatz macht<br/>das Lernen zum<br/>Spaß
            </button>
        </div>
    )
}

export default Game;