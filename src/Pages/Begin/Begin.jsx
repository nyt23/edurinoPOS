
import './Begin.css';
import { useLocation } from "wouter";
import {useState} from "react";

import PurplePageBg from "../../Media/Pictures/PageBg/PurplePageBg/PurplePageBg.jsx";
import LogoSub from "../../Media/Pictures/LogoSub/LogoSub.jsx";
import FirstBlue from "../../Media/Pictures/PicBegin/Elements/BlueElement/FirstBlue.jsx";
import SecondOrange from "../../Media/Pictures/PicBegin/Elements/OrangeElement/SecondOrange.jsx";
import AppleGoogle from "../../Media/Pictures/PicBegin/AppPlatforms/Apple&Google.jsx";
import Amazon from "../../Media/Pictures/PicBegin/AppPlatforms/Amazon.jsx";
import EdurinoApp from "../../Media/Pictures/PicBegin/EdurinoApp/EdurinoApp.jsx";
import EdurinoFigurine from "../../Media/Pictures/PicBegin/EdurinoFigurine/EdurinoFigurine.jsx";
import Line from "../../Media/Pictures/PicBegin/Line/Line.jsx";
import EdurinoTablet from "../../Media/Pictures/PicBegin/EdurinoTablet/EdurinoTablet.jsx";
import Demonstration from "../../Media/Pictures/PicBegin/Demonstration/Demonstration.jsx";

const Begin = () => {
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
        <div className={`whole-begin-page ${isClicked ? 'whole-begin-page-animation' : ''}`}>
            <div className={'begin-page'}></div>
            <div>
                <PurplePageBg />
                <LogoSub />
                <Demonstration />
            </div>

            <div>
                <div className={'first'}>
                    <p className={'number1'}>1.</p>
                    <p className={'number1-content'}>Laden Sie die Edurino-<br/>App herunter</p>
                    <EdurinoApp />
                    <FirstBlue className={'first-point'}/>
                    <AppleGoogle />
                    <Amazon />
                </div>

                <div className={'second'}>
                    <p className={'number2'}>2.</p>
                    <p className={'number2-content'}>Platzieren Sie die Figur<br/>auf dem Tablett</p>
                    <SecondOrange />
                    <EdurinoFigurine />
                    <Line />
                </div>

                <div className={'third'}>
                    <p className={'number3'}>3.</p>
                    <p className={'number3-content'}>Starten Sie das<br/>Spiel mit dem<br/>Edurino Magic Pen!</p>
                    <FirstBlue className={'third-point'}/>
                    <EdurinoTablet />
                </div>

            </div>

            <div>
                <button className={'begin-title-button'} onClick={handleGoBack}>Zeigen<br/>Sie mir,<br/>wie ich<br/>beginne</button>
            </div>
        </div>
    );
}

export default Begin;