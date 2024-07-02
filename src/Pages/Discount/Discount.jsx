
import './Discount.css';
import { useLocation } from "wouter";
import DiscountPageBg from "../../Media/Pictures/PicMenu/PicDiscount/DiscountPageBg/DiscountPageBg.jsx";
import Bg from "../../Media/Pictures/PicMenu/Bg/Bg.jsx";
import BackArrowPurple from "../../Media/Elements/BackArrow/BackArrowPurple.jsx";
import LogoSub from "../../Media/Pictures/LogoSub/LogoSub.jsx";



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
            <DiscountPageBg />
            <BackArrowPurple onClick={handleGoBack} />
        </div>

    );
}

export default Discount;