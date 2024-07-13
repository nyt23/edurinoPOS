
import {useLocation} from "wouter";

import LogoSub from "../../Media/Pictures/LogoSub/LogoSub.jsx";
import BluePageBg from "../../Media/Pictures/PageBg/BluePageBg/BluePageBg.jsx";
import BackArrowBlue from "../../Media/Elements/BackArrow/BackArrowBlue/BackArrowBlue.jsx";

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
                <BluePageBg/>
                <BackArrowBlue onClick={handleGoBack}/>
            </div>
        </div>
    );
}

export default Secure;