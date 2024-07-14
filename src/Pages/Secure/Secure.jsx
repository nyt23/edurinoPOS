
import './Secure.css';
import {useLocation} from "wouter";
import {useState} from "react";
import LogoSub from "../../Media/Pictures/LogoSub/LogoSub.jsx";
import BluePageBg from "../../Media/Pictures/PageBg/BluePageBg/BluePageBg.jsx";
import LineSecurePage from "../../Media/Pictures/PicSecure/LineSecurePage/LineSecurePage.jsx";
import Phone from "../../Media/Pictures/PicSecure/Phone/Phone.jsx";


const Secure = () => {
    const [, setLocation] = useLocation();
    const [isClicked, setIsClicked] = useState(false);

    const handleGoBack = () => {
        setIsClicked(true);
        setTimeout(() => {
            setLocation('/menu');
            console.log('Go back to menu');
        }, 300)
    }

    return (
        <div className={`whole-secure-page' ${isClicked ? 'whole-secure-page-animation' : ''}`}>
            <div className={'secure-page'}></div>
            <div>
                <LogoSub/>
                <BluePageBg/>
                <LineSecurePage />
                <Phone />
            </div>

            <div>
                <p className={'secure-headline1'}>Sicheres digitales</p>
                <p className={'secure-headline2'}>Lernen für <span className={'kinder'}>Kinder</span></p>
                <p className={'secure-headline3'}>Alles im Blick dank<br/>des geschützten<br/>Elternbereichs</p>
            </div>

            <div>
                <button className={'secure-title-button'} onClick={handleGoBack}>Sicheres<br/>digitales Lernen<br/>für Kinder</button>
            </div>

            <div>
                <div className={'point1'}>
                    <p className={'text1'}>Einsehen des<br/>Lernfortschritts</p>
                </div>
                <div className={'point2'}>
                    <p className={'text2'}>Anlegen von mehreren<br/>Kinderprofilen</p>
                </div>
                <div className={'point3'}>
                    <p className={'text3'}>Einstellen von Nutzungszeiten der App</p>
                </div>
            </div>

        </div>
    );
}

export default Secure;