
import './Begin.css';
import PurplePageBg from "../../Media/Pictures/PageBg/PurplePageBg/PurplePageBg.jsx";
import BackArrowPurple from "../../Media/Elements/BackArrow/BackArrowPurple/BackArrowPurple.jsx";
import { useLocation } from "wouter";
import LogoSub from "../../Media/Pictures/LogoSub/LogoSub.jsx";

const Begin = () => {
    const [, setLocation] = useLocation();
    function handleGoBack () {
        setLocation('/menu');
        console.log('Go back to menu');
    }

    return (
        <div>
            <div className={'begin-page'}></div>
            <div>
                <PurplePageBg />
                <LogoSub />
                <BackArrowPurple onClick={handleGoBack} />
            </div>
        </div>

    )
}

export default Begin;