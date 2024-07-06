import BackArrowPurple from "../../Media/Elements/BackArrow/BackArrowPurple/BackArrowPurple.jsx";
import LogoSub from "../../Media/Pictures/LogoSub/LogoSub.jsx";
import PurplePageBg from "../../Media/Pictures/PageBg/PurplePageBg/PurplePageBg.jsx";
import {useLocation} from "wouter";


const Secure = () => {
    const [, setLocation] = useLocation();
    const handleGoBack = () => {
        setLocation('/menu');
        console.log('Go back to menu');
    }

    return (
        <div>
            <div className={'secure-page'}></div>
            <div>
                <LogoSub/>
                <PurplePageBg/>
                <BackArrowPurple onClick={handleGoBack}/>
            </div>
        </div>
    );
}

export default Secure;