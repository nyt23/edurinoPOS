
import './Discount.css';
import { useLocation } from "wouter";
import LogoSub from "../../Media/Pictures/LogoSub/LogoSub.jsx";
import OrangePageBg from "../../Media/Pictures/PageBg/OrangePageBg/OrangePageBg.jsx";
import BackArrowOrange from "../../Media/Elements/BackArrow/BackArrowOrange/BackArrowOrange.jsx";



const Discount = () => {
    const [, setLocation] = useLocation();
    const handleGoBack = () => {
        setLocation('/menu');
        console.log('Go back to menu');
    }

    return (
        <div>
            <div className={'discount-page'}></div>
            <div>
                <LogoSub/>
                {/*<Bg />*/}
                <OrangePageBg/>
                <BackArrowOrange onClick={handleGoBack}/>
            </div>
        </div>


    );
}

export default Discount;