
import './Discount.css';
import {useLocation} from "wouter";

import BackArrowOrange from "../../../Media/Elements/BackArrow/BackArrowOrange/BackArrowOrange.jsx";
import LogoSub from "../../../Media/Pictures/LogoSub/LogoSub.jsx";
import OrangePageBg from "../../../Media/Pictures/PageBg/OrangePageBg/OrangePageBg.jsx";
import FeedbackSticker from "../../../Media/Pictures/PicFeedback/FeedbackSticker/FeedbackSticker.jsx";
import PurpleElementDiscount from "../../../Media/Pictures/PicDiscount/PurpleElementDiscount/PurpleElementDiscount.jsx";
import ShapeLineDiscount from "../../../Media/Pictures/PicDiscount/ShapeLineDiscount/ShapeLineDiscount.jsx";
import QRcode from "../../../Media/Pictures/PicDiscount/QRcode/QRcode.jsx";
import DisplayDiscount from "../../../Media/Pictures/PicDiscount/DisplayDiscount/DisplayDiscount.jsx";
import Children from "../../../Media/Elements/DecoElements/Children/Children.jsx";


const Discount = () => {
    const [, setLocation] = useLocation();
    function handleGoBack () {
        setLocation('/menu');
        console.log('Go back to menu');
    }

    return (
        <div>
            <div className={'discount-page'}></div>
            <div>
                <LogoSub/>
                <OrangePageBg/>
                <FeedbackSticker/>
                <BackArrowOrange onClick={handleGoBack}/>
                <PurpleElementDiscount />
                <ShapeLineDiscount />
                <QRcode />
                <DisplayDiscount />
                <Children className={'children-discount'}/>
            </div>

            <div>
                <p className={'discount-headline'}>Danke für Ihre<br/>Rückmeldung!</p>
                <p className={'discount-sticker-title'}>Feedback<br/>+<br/>20 %<br/>Gutschein</p>
                <p className={'discount-scanQR'}>Scannen Sie den<br/>QR-Code, um Ihren<br/><span className={'purple-20'}>20% Gutschein</span><br/>freizuschalten</p>
            </div>
        </div>
    );
}

export default Discount;