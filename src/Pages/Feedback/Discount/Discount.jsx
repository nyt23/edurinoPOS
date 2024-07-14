
import './Discount.css';
import {useLocation} from "wouter";
import {useState} from "react";

import LogoSub from "../../../Media/Pictures/LogoSub/LogoSub.jsx";
import OrangePageBg from "../../../Media/Pictures/PageBg/OrangePageBg/OrangePageBg.jsx";
import PurpleElementDiscount from "../../../Media/Pictures/PicDiscount/PurpleElementDiscount/PurpleElementDiscount.jsx";
import ShapeLineDiscount from "../../../Media/Pictures/PicDiscount/ShapeLineDiscount/ShapeLineDiscount.jsx";
import QRcode from "../../../Media/Pictures/PicDiscount/QRcode/QRcode.jsx";
import DisplayDiscount from "../../../Media/Pictures/PicDiscount/DisplayDiscount/DisplayDiscount.jsx";
import Children from "../../../Media/Elements/DecoElements/Children/Children.jsx";



const Discount = () => {
    const [, setLocation] = useLocation();
    const [isClicked, setIsClicked] = useState(false);

    function handleGoBack () {
        setIsClicked(true);
        setTimeout(() => {
            setLocation('/menu');
            console.log('Go back to menu');
        }, 300);
    }

    return (
        <div className={`whole-discount-page ${isClicked ? 'whole-discount-page-animation' : ''}`}>
            <div className={'discount-page'}></div>
            <div>
                <LogoSub/>
                <OrangePageBg/>
                <PurpleElementDiscount />
                <ShapeLineDiscount />
                <QRcode />
                <DisplayDiscount />
                <Children className={'children-discount'}/>
            </div>

            <div>
                <p className={'discount-headline'}>Danke für Ihre<br/>Rückmeldung!</p>
                <p className={'discount-scanQR'}>Scannen Sie den<br/>QR-Code, um Ihren<br/><span className={'purple-20'}>20% Gutschein</span><br/>freizuschalten</p>
            </div>

            <div>
                <button className={'discount-title-button'} onClick={handleGoBack}>Feedback<br/>+<br/>20 %<br/>Gutschein</button>
            </div>
        </div>
    );
}

export default Discount;