
import './Menu.css'

// logo
import Logo from "../../Media/Pictures/Logo/Logo.jsx";

// bg
import Bg from '../../Media/Pictures/PicMenu/Bg/Bg.jsx';
// blueBanner
import BlueBanner from "../../Media/Pictures/PicMenu/BlueBanner/BlueBanner.jsx";
import Children from "../../Media/Pictures/PicMenu/Elements/Children/Children.jsx";
import Star from "../../Media/Pictures/PicMenu/Elements/Star/Star.jsx";
import OrangeDiscountBg from "../../Media/Pictures/PicMenu/BubbleBg/OrangeBubbles/Discount/OrangeDiscountBg.jsx";
import Figurine from "../../Media/Pictures/PicMenu/Elements/Figurine/Figurine.jsx";
import DiscountButton from "./BubbleButtons/Orange/DiscountButton/DiscountButton.jsx";
import ABC from "../../Media/Pictures/PicMenu/Elements/ABC/ABC.jsx";


const Menu = () => {
    return (
        <div>
            <div className={'bg'}>
                <Bg />
            </div>

            <div className={'body'}>
                <div className={'Logo'}>
                    <Logo />
                </div>
                <div className={'banner'}>
                    <BlueBanner />
                    <p style={{fontFamily:'Atma',
                        fontSize:'100px',
                        textAlign:'right',
                        lineHeight: 1.1,
                        position: 'absolute',
                        left: '289px',
                        top: '70px',
                        width: '699px',
                        height: '226px',
                        color: '#FEF7EE'
                    }}>
                        Get Your Edurino Insights
                    </p>
                </div>

                <div className={'circle-options'}>
                    <div>
                        <Children />
                        <Star />
                        <Figurine />
                        <ABC />
                        <DiscountButton />
                        <OrangeDiscountBg />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Menu;