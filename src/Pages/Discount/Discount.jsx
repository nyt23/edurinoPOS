
import './Discount.css';
import { useLocation } from "wouter";
import Bg from "../../Media/Pictures/PicMenu/Bg/Bg.jsx";
import LogoSub from "../../Media/Pictures/LogoSub/LogoSub.jsx";
import OrangePageBg from "../../Media/Pictures/OrangePageBg/OrangePageBg.jsx";
import BackArrowOrange from "../../Media/Elements/BackArrow/BackArrowOrange/BackArrowOrange.jsx";



const Discount = () => {
    const [, setLocation] = useLocation();
    const handleGoBack = () => {
        setLocation('/menu');
        console.log('Go back to menu');
    }

    return (
        <div>
            <LogoSub />
            <Bg />
            <OrangePageBg />
            <BackArrowOrange onClick={handleGoBack} />
        </div>

    );
}

export default Discount;